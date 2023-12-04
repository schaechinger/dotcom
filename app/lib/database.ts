import { Db, MongoClient } from 'mongodb';

let instance: Db | null = null;
let promise: Promise<void> | null = null;

export const getDb = async () => {
  if (!instance && !promise) {
    promise = new Promise((resolve) => {
      const username = process.env.DB_USERNAME;
      const password = process.env.DB_PASSWORD;
      const host = process.env.DB_HOST;

      const client = new MongoClient(
        `mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority`,
      );

      void client.connect()
        .then(() => {
          instance = client.db(process.env.DB_DATABASE);

          return instance.command({ ping: 1 });
        })
        .then(() => {
          resolve();
        });
    });
  }

  await promise;

  return instance;
};