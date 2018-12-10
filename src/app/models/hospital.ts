import { Doctor } from './doctor';

export interface Hospital {
    id_hospital: number;
    name: string;
    doctors: Doctor[];
}
