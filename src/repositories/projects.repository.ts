import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Projects } from '../models/projects';

export class ProjectsRepository extends DefaultCrudRepository<
    Projects,
    typeof Projects.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Projects, datasource);
    }
}