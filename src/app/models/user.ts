export interface User {
    id: number;
    email: string;
    name: string;
    surname: string;
    role: string;
    isActive?: boolean;
}
