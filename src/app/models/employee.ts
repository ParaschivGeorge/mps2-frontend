import { User } from './user';
import { TransfusionCenter } from './transfusion-center';

export interface Employee extends User {
    isActive: boolean;
    center: TransfusionCenter;
}
