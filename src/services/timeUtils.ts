const multiplier = [1, 60, 3600];

export const segmentTimeToString = (time: number, forceTime = false, cutMs = false): string => {
  if (!time && !forceTime) {
    return '';
  }

  const parts: number[] = [];
  let rest = Math.abs(time);

  if (cutMs) {
    rest = Math.floor(rest);
  }

  [...multiplier].reverse().forEach((m) => {
    parts.push(Math.floor(rest / m));
    rest %= m;
  });

  while (2 < parts.length && !parts[0]) {
    parts.shift();
  }

  const string = parts.map((p, i) => {
    if (i >= parts.length - 2) {
      return `0${p}`.slice(-2);
    }

    return p;
  }).join(':');

  // check for milli seconds
  if (rest % 1) {
    return `${string}${(rest % 1).toFixed(3).replace('.', ',').substring(1).replace(/0+$/g, '')}`;
  }

  return string;
};

export const formatDate = (date: string | Date): string => (
  new Date(date).toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
);
