import { API_BASE_URL, API_ROOT } from './config';

export type BodyData = { [s: string]: unknown };

let baseUrl = `${API_BASE_URL}/${API_ROOT}`;
if (!API_BASE_URL && 'undefined' !== typeof window) {
  baseUrl = `${window.location.origin}${baseUrl}`;
}

const handleResponse = async <T>(response?: Response | null): Promise<T> => {
  if (!response) {
    return {} as T;
  }

  const isJson = response?.headers?.get('content-type')?.includes('application/json');
  const data: T | { results: T } = await (isJson ? response.json() : response.text());

  // check for error response
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data as unknown as { error: string })?.error
      || (data as unknown as { message: string })?.message
      || response.status;

    return Promise.reject(error);
  }

  if ((data as { results: T }).results) {
    return (data as { results: T }).results;
  }

  return data as T;
};

const trimContent = (content: unknown) => (
  JSON.stringify(content, (_key, value) => (
    'string' === typeof value ? value.trim() : value as string
  ))
);

const request = (method: string) => async <T>(
  url: string,
  body?: BodyData | BodyData[] | Blob | File | FormData,
): Promise<T | null> => {
  const headers = new Headers();
  const options: RequestInit = {
    method,
    headers,
  };
  if (body) {
    if (body instanceof FormData) {
      options.body = body;
    } else {
      headers.append('Content-Type', 'application/json');
      options.body = trimContent(body);
      options.body = JSON.stringify(body);
    }
  }

  let response: Response | null = null;

  try {
    response = await fetch(`${baseUrl}${url}`, options);
  } catch (e) {
    // could not fetch
    return null;
  }

  try {
    const data = await handleResponse<T>(response);

    return data;
  } catch (e) {
    // error
    if (response && !response.ok) {
      return null;
    } else {
      throw e;
    }
  }
};

export const fetchWrapper = {
  getBaseUrl: () => baseUrl,
  get: request('GET'),
  post: request('POST'),
};