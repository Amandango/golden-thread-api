import { Entity, property, model } from '@loopback/repository';

@model()
export class Addresses extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    number: string;

    @property({
        type: 'string',
        required: true
    })
    street: string;

    @property({
        type: 'string',
        required: true
    })
    city: string;

    @property({
        type: 'string',
        required: true
    })
    postCode: string;

    @property({
        type: 'string',
        required: true
    })
    country: string;

}