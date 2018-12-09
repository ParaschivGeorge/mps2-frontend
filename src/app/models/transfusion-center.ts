import { BloodRequest } from './blood-request';
import { Employee } from './employee';

export interface TransfusionCenter {
    id_center: number;
    name: string;
    employees: Employee[];
    requests: BloodRequest[];
}
