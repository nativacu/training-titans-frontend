export interface TechStack {
    id: number,
    name: string,
    trainingCount: number,
    creationDate: string,
}

export interface TechProfile {
    id?: number;
    name: string,
    area: string;
    requirements: Requirement[];
    description: string;
    language: Language;
}

export interface Language {
    id: number;
    name: string;
}

export interface Requirement {
    id?: string;
    technology_id: string;
    technology_name: string;
    name?: string;
    description?: string;
    seniority: Seniority;
}
export interface Technology {
    id: number;
    name: string;
    description?: string;
}

export type Seniority = 'junior' | 'semisenior' | 'senior' | null;

export type ValuesOf<T> = T[keyof T];