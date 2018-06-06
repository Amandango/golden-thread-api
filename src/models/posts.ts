import { Entity, property, model } from '@loopback/repository';

@model()
export class Posts extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    title: string;

    @property({
        type: 'string',
        required: true
    })
    desc: string;

    @property({
        type: 'string',
        required: true
    })
    img: string;
}