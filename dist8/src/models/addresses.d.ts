import { Entity } from '@loopback/repository';
export declare class Addresses extends Entity {
    id?: number;
    number: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
}
