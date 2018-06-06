import { Entity } from '@loopback/repository';
export declare class Posts extends Entity {
    id?: number;
    title: string;
    desc: string;
    img: string;
}
