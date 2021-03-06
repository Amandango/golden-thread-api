import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    id?: number;
    name: string;
    desc: string;
    logo: string;
    getId(): number | undefined;
}
