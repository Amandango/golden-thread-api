import { Entity } from '@loopback/repository';
export declare class Payments extends Entity {
    id?: number;
    cardNumber: string;
    cardType: string;
    cardName: string;
    securityCode: string;
    expiryDate: Date;
}
