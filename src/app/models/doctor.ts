import { User } from './user';
import { Hospital } from './hospital';
import { BloodRequest } from './blood-request';

export interface Doctor extends User {
    isActive: boolean;
    hospital: Hospital;
    requests: BloodRequest[];
    idDoctor: number;
    id_doctor: number;
}
