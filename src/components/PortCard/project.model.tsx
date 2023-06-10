export interface IProject {
    id: number;
    key: number;
    image: string;
    title: string;
    email: string;
    password: string;
    description: string;
    tech: string;
    github: string;
    deployed?: string;
    demo?: string;
}

export interface IProjectState {}
