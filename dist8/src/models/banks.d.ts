import { Entity } from '@loopback/repository';
export declare class Banks extends Entity {
    id?: number;
    accountNumber: string;
    bank: string;
}
