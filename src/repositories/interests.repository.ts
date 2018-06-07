import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Interests } from '../models/interests';

export class InterestsRepository extends DefaultCrudRepository<
    Interests,
    typeof Interests.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Interests, datasource);
    }
}