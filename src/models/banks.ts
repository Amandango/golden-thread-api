import { Entity, property, model } from '@loopback/repository';

@model()
export class Banks extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    accountNumber: string;

    @property({
        type: 'string',
        required: true
    })
    bank: string;

}