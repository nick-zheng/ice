/**
 * @description User-Service response
 */
export interface IProject {
  fullPath: string;
}

export interface IProjectsResult {
  projects: IProject[]
}

/**
 * @description User-Service abstractions
 */
export interface IProjectsService {
  getProjects(): Promise<IProjectsResult>;
}
