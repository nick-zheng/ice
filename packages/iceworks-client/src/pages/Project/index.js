import React from 'react';
import { Button, Input } from '@alifd/next';
import { useMappedState } from 'redux-react-hook';


export default function Projects() {
  const { projects } = useMappedState(state => ({
    projects: state.projects,
  }));

  console.debug('projects', projects);

  let projectPath = '';

  return (
    <div>
      <div>
        Project
      </div>
      <div>
        <div>
          <Input onChange={(value) => {
              projectPath = value;
            }}
          />
          <Button onClick={() => {
              alert(projectPath);
            }}
          >
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
