export interface Project {
  id: number;
  key: number;
  image: string;
  title: string;
  description: string;
  tech: string;
  github: string;
  deployed?: string;
  demo?: string;
}
