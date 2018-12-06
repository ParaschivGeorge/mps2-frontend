import { TransfusionCenter } from './transfusion-center';
import { Doctor } from './doctor';
import { Donation } from './donation';

export interface BloodRequest {
    id: number;
    status: string;
    bloodType: string;
    rh: string;
    quantity: number;
    receivingPerson: string;
    center: TransfusionCenter;
    doctor: Doctor;
    donations: Donation[];
}
