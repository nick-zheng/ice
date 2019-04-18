import { controller, get, provide, inject } from 'midway';
import { IProjectsService } from '../../interface';

@provide()
@controller('/api/projects')
export class HomeController {
  @inject('projectsService')
  service: IProjectsService;

  @get('/')
  async index(ctx) {
    ctx.body = await this.service.getProjects();
  }
}
