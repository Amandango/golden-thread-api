import { Entity, property, model } from '@loopback/repository';

@model()
export class Projects extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true,
    })
    name: string;

    @property({
        type: 'string',
        required: true,
    })
    desc: string;

    @property({
        type: 'string',
        required: true,
    })
    img: string;

    @property({
        type: 'number',
        required: true,
    })
    charityId: number;

}