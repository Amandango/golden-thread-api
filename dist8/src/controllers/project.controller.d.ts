import { Projects } from '../models/projects';
import { ProjectsRepository } from '../repositories/projects.repository';
export declare class ProjectController {
    private projectsRepo;
    constructor(projectsRepo: ProjectsRepository);
    findProjectsByCharity(charityId: number): Promise<Projects[]>;
    createProject(project: Projects): Promise<Projects>;
}
