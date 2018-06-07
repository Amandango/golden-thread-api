import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Interests } from '../models/interests';
export declare class InterestsRepository extends DefaultCrudRepository<Interests, typeof Interests.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
