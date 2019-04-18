import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = 'http://127.0.0.1:7001/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitName = project => Object.assign({}, project, { name: undefined });
const Projects = {
  all: page =>
    requests.get(`/projects?${limit(20, page)}`),
  del: name =>
    requests.del(`/projects/${name}`),
  get: name =>
    requests.get(`/projects/${name}`),
  update: project =>
    requests.put(`/projects/${project.name}`, { project: omitName(project) }),
  create: project =>
    requests.post('/projects', { project }),
};

export default {
  Projects,
  setToken: (_token) => { token = _token; },
};
