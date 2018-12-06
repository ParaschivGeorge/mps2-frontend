import { Doctor } from './doctor';

export interface Hospital {
    id: number;
    name: string;
    doctors: Doctor[];
}
