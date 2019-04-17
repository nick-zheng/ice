import React, { Component } from 'react';
import { Button, Input } from '@alifd/next';

export default class Project extends Component {
  state = {};

  onOpenProject = () => {
  }

  render() {
    return (
      <div>
        <div>
          Project
        </div>
        <div>
          <div>
            <Input onChange={(value) => {
                this.projectPath = value;
              }}
            />
            <Button onClick={this.onOpenProject}>打开项目</Button>
          </div>
          <div>
            <Button>创建项目</Button>
          </div>
        </div>
      </div>
    );
  }
}
