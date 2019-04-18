import { observable, action } from 'mobx';
import EventEmitter from 'events';

class Projects extends EventEmitter {
  // 项目列表
  @observable list = [
  ];

  // 当前项目
  @observable current = null;

  @action
  add = () => {
  }

  has(path) {
    return this.list.some(project => project.fullPath === path);
  }
}

const projects = new Projects();

export default projects;
