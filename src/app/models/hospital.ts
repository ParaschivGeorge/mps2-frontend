import { Doctor } from './doctor';

export interface Hospital {
    idHospital: number;
    name: string;
    doctors: Doctor[];
}
