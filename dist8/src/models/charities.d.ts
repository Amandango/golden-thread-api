import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    idcharities?: number;
    name: string;
    desc: string;
    logo: string;
    getIdcharities(): any;
}
