import React, { Component } from 'react';
import { Button, Input } from '@alifd/next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PROJECTS_PAGE_LOADED, PROJECTS_PAGE_UNLOADED } from '@constants/actionTypes';
import agent from '@utils/agent';

const mapStateToProps = state => ({
  ...state.projects,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROJECTS_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROJECTS_PAGE_UNLOADED }),
});

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    onLoad: PropTypes.func.isRequired,
    onUnload: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.onLoad(agent.Projects.all());
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  onClick = () => {

  }

  projectPath = '';

  render() {
    const { projects } = this.props;

    return (
      <div>
        <div>
          Project
        </div>
        <ul>
          {projects.map(({ name }, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <div>
          <div>
            <Input onChange={(value) => {
                this.projectPath = value;
              }}
            />
            <Button onClick={this.onClick}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

