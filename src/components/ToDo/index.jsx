import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddForm from './AddForm';
import Header from './Header';
import Tasks from './Tasks';
import style from './ToDo.module.sass';
import { TasksContext } from '../../contexts';

function TodoList () {
  const initialState = [
    {
      id: 1,
      title: 'Some text',
      isDone: false,
    },
    {
      id: 2,
      title: 'Some second text test string to test break-word property',
      isDone: false,
    },
    {
      id: 3,
      title: 'Test',
      isDone: true,
    },
  ];
  const [tasks, setTasks] = useState(initialState);

  const removeTask = id => {
    setTasks(
      tasks.filter(task => {
        return task.id !== id;
      })
    );
  };

  const toggleTaskStatus = id => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const addTask = title => {
    const newTask = {
      id: uuidv4(),
      title: title,
      isDone: false,
    };
    const prevState = [...tasks];
    setTasks([...prevState, newTask]);
  };
  

  return (
    <TasksContext.Provider
      value={{
        toggleTask: toggleTaskStatus,
        removeTask,
        addTask,
      }}
    >
      <div className={style.container}>
        <Header />
        <Tasks tasks={tasks} />
        <AddForm addTask={addTask} />
      </div>
    </TasksContext.Provider>
  );
}

export default TodoList;
