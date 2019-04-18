import React from 'react';
import { Button, Input } from '@alifd/next';

export default function Projects() {
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
