import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { InterestUserMap } from '../models/interestUserMap';
export declare class InterestUserMapRepository extends DefaultCrudRepository<InterestUserMap, typeof InterestUserMap.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
