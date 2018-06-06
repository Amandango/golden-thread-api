import { Entity, property, model } from '@loopback/repository';

@model()
export class Payments extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true,
    })
    cardNumber: string;

    @property({
        type: 'string',
        required: true,
    })
    cardType: string;

    @property({
        type: 'string',
        required: true,
    })
    cardName: string;

    @property({
        type: 'string',
        required: true,
    })
    securityCode: string;

    @property({
        type: 'string',
        required: true,
    })
    expiryDate: Date;

}