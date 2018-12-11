import { TransfusionCenter } from './transfusion-center';
import { Doctor } from './doctor';
import { Donation } from './donation';

export interface BloodRequest {
    idRequest: number;
    status: string;
    bloodType: string;
    rh: string;
    quantity: number;
    receivingPerson: string;
    transfusionCenter: TransfusionCenter;
    doctor: Doctor;
    donations: Donation[];
}
