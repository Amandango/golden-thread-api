import { Entity } from '@loopback/repository';
export declare class Donations extends Entity {
    id?: number;
    charityId: number;
    userId: number;
    amount: number;
    date: string;
}
