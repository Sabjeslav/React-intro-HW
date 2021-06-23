import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import style from './Tasks.module.sass';
import Task from './Task';

function Tasks ({ tasks }) {
  const taskList = tasks.map(task => <Task key={uuidv4()} task={task} />);
  return <div className={style.tasksWrapper}>{taskList}</div>;
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
