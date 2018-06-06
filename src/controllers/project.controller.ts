import { get, post, requestBody, HttpErrors, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { Projects } from '../models/projects';
import { ProjectsRepository } from '../repositories/projects.repository';

export class ProjectController {
  constructor(@repository(ProjectsRepository.name) private projectsRepo: ProjectsRepository
  ) {  
  }

  @get('projects/{charityId}')
  async findProjectsByCharity(
    @param.query.string('charityId') charityId: number, 
  ) {
    return await this.projectsRepo.find({where: { charityId: charityId }})
  }

  @post('project')
  async createProject(@requestBody() project: Projects) {
    return await this.projectsRepo.create(project);
  }
}