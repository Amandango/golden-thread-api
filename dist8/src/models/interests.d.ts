import { Entity } from '@loopback/repository';
export declare class Interests extends Entity {
    id?: number;
    animalRights: boolean;
    environment: boolean;
    humanRights: boolean;
    health: boolean;
    poverty: boolean;
    foodWaterScarcity: boolean;
}
