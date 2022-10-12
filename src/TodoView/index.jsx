import React from 'react';
import TodoStore from '../TodoStore';
import TodoInput from '../TodoInput';
import TodoItem from '../TodoItem';
import TodoTotal from '../TodoTotal';
import './index.less';
const TodoView = () => {
  return (
    <div className="container">
      <TodoInput todo={TodoStore} />
      <TodoItem todo={TodoStore} />
      <TodoTotal todo={TodoStore} />
    </div>
  );
};

export default TodoView;
