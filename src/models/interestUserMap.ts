import { Entity, property, model } from '@loopback/repository';

@model()
export class InterestUserMap extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    userId: number;

    @property({
        type: 'number',
        required: true
    })
    interestId: number;

}