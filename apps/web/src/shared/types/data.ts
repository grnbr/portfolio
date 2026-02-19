export const ProjectIds = {
  Tatell: 'tatell',
} as const;

export type ProjectId = (typeof ProjectIds)[keyof typeof ProjectIds];

export type Project = {
  description: string;
  id: ProjectId;
  img: string;
  linkBtn?: {
    href: string;
    label: string;
  };
  title: string;
};
