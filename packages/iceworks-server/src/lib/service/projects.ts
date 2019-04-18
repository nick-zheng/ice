import { provide } from 'midway';
import { IProjectsService, IProjectsResult } from '../../interface';
import { projectsStorage } from '../storage';
import * as path from 'path';

@provide('projectsService')
export class ProjectsService implements IProjectsService {
  async getProjects(): Promise<IProjectsResult> {
    const projectFolderPaths = projectsStorage.get() || [];
    return {
      projects: projectFolderPaths.map((projectFolderPath) => {
        return {
          name: path.basename(projectFolderPath),
          fullPath: projectFolderPath
        };
      })
    };
  }
}
