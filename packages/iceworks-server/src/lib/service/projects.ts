import { provide } from 'midway';
import { IProjectsService, IProjectsResult } from '../../interface';
import { projectsStorage } from '../storage';
import Project from '../adapter/project';

@provide('projectsService')
export class ProjectsService implements IProjectsService {
  async getProjects(): Promise<IProjectsResult> {
    const projectFolderPaths = projectsStorage.get() || [];
    return {
      projects: await Promise.all(projectFolderPaths.map(async (projectFolderPath) => {
        const project = new Project(projectFolderPath);
        await project.load();
        return project;
      }))
    };
  }
}
