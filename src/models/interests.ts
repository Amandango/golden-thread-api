import { Entity, property, model } from '@loopback/repository';

@model()
export class Interests extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'boolean',
        required: true
    })
    animalRights: boolean;

    @property({
        type: 'boolean',
        required: true
    })
    environment: boolean;

    @property({
        type: 'boolean',
        required: true
    })
    humanRights: boolean;

    @property({
        type: 'boolean',
        required: true
    })
    health: boolean;

    @property({
        type: 'boolean',
        required: true
    })
    poverty: boolean;

    @property({
        type: 'boolean',
        required: true
    })
    foodWaterScarcity: boolean;

}