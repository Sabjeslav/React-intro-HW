import React, { useContext } from 'react';
import { Checkbox } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './Task.module.sass';
import { TasksContext } from 'contexts';

function Task ({ task }) {
  const { toggleTask, removeTask } = useContext(TasksContext);
  return (
    <div className={style.taskWrapper}>
      <div
        className={cx(style.taskTitle, {
          [style.done]: task.isDone,
        })}
      >
        {task.title}
      </div>
      <div className={style.taskControls}>
        <Checkbox
          checked={task.isDone}
          onChange={() => toggleTask(task.id)}
          className={style.checkbox}
        />
        <button onClick={() => removeTask(task.id)} className={style.deleteBtn}>
          <DeleteForeverIcon />
        </button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
