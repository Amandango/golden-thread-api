import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { InterestUserMap } from '../models/interestUserMap';

export class InterestUserMapRepository extends DefaultCrudRepository<
    InterestUserMap,
    typeof InterestUserMap.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(InterestUserMap, datasource);
    }
}