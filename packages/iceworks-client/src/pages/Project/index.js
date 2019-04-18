import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '@alifd/next';
import { inject, observer } from 'mobx-react';
@inject('projects')
@observer
export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.object.isRequired,
  };

  async onOpenProject() {
    const { projects } = this.props;
    projects.add(this.projectPath);
  }

  projectPath = '';

  render() {
    const { projects } = this.props;
    const { list } = projects;

    return (
      <div>
        <div>
          Project
        </div>
        <div>
          <div>
            {
              list.map(({ name }) => {
                return name;
              })
            }
          </div>
          <div>
            <Input onChange={(value) => {
                this.projectPath = value;
              }}
            />
            <Button onClick={this.onOpenProject}>
              打开项目
            </Button>
          </div>
          <div>
            <Button>创建项目</Button>
          </div>
        </div>
      </div>
    );
  }
}
