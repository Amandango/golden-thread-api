import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Projects } from '../models/projects';
export declare class ProjectsRepository extends DefaultCrudRepository<Projects, typeof Projects.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
