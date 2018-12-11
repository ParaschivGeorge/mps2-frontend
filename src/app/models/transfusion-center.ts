import { BloodRequest } from './blood-request';
import { Employee } from './employee';

export interface TransfusionCenter {
    idCenter: number;
    name: string;
    employees: Employee[];
    requests: BloodRequest[];
}
