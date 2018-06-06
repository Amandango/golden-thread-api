import { Entity } from '@loopback/repository';
export declare class Projects extends Entity {
    id?: number;
    name: string;
    desc: string;
    img: string;
    charityId: number;
}
