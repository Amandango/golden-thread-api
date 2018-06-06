import { Entity } from '@loopback/repository';
export declare class Roles extends Entity {
    id?: number;
    admin: boolean;
    user: boolean;
    super: boolean;
}
