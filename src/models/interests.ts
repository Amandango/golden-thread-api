import { Entity, property, model } from '@loopback/repository';

@model()
export class Interests extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    animalRights: boolean;

    @property({
        type: 'string',
        required: true
    })
    environment: boolean;

    @property({
        type: 'string',
        required: true
    })
    humanRights: boolean;

    @property({
        type: 'string',
        required: true
    })
    health: boolean;

    @property({
        type: 'string',
        required: true
    })
    poverty: boolean;

    @property({
        type: 'string',
        required: true
    })
    foodWaterScarcity: boolean;
}