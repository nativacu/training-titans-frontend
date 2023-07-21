export interface TechStack {
    id: number,
    name: string,
    trainingCount: number,
    creationDate: string,
}

export interface TechProfile {
    area: string;
    skillSet: Skill[];
    description: string;
    language: string;
}

export interface Skill {
    technology_id: number;
    level: SkillLevel;
}

export interface TechArea {
    label: string;
    value: string;
}

export interface TechLanguage {
    id: number;
    name: string;
}

export type SkillLevel = 'junior' | 'semisenior' | 'senior' | null;

export type ValuesOf<T> = T[keyof T];