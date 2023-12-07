import { WebClient } from '@slack/web-api';

export const sendMessage = (message: string) => {
  const client = new WebClient(process.env.SLACK_TOKEN);

  if (process.env.SLACK_NOTIFY_USER) {
    message = `<@${process.env.SLACK_NOTIFY_USER}> ${message}`;
  }

  return client.chat.postMessage({
    text: message,
    mrkdwn: true,
    channel: process.env.SLACK_CHANNEL!,
  });
};
