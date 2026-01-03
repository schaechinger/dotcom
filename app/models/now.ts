export type NowData = {
  updatedAt: string;
  tasks: { category: string; tasks: string[]; description?: string; }[];
};

export type NowActivityData = NowData & {
  activities: { category: string; tasks: string[]; description?: string; }[];
};
