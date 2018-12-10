import { Donor } from './donor';
import { BloodRequest } from './blood-request';

export interface Donation {
    id: number;
    bloodTest: File;
    date: string;
    quantity: number;
    donor: Donor;
    request: BloodRequest;
}
