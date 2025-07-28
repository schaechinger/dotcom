export type NowData = {
  updatedAt: string;
  tasks: { category: string; tasks: string[]; description?: string; }[];
};
