import { User } from './user';
import { Donation } from './donation';

export interface Donor extends User {
    bloodType: string;
    rh: string;
    donations: Donation[];
    idDonor: number;
    id_donor: number;
}
