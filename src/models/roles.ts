import { Entity, property, model } from '@loopback/repository';

@model()
export class Roles extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    admin: boolean;

    @property({
        type: 'string',
        required: true
    })
    user: boolean;

    @property({
        type: 'string',
        required: true
    })
    super: boolean;

}
