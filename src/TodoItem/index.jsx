import React from 'react';
import { observer } from 'mobx-react';
import './index.less';

const TodoItem = observer(({ todo }) => {
  const toggleCompleted = (id) => {
    todo.toggleCompleted(id);
  };

  const toggleDel = (id) => {
    todo.toggleDel(id);
  };
  return todo.list.map((item) => {
    return (
      <div key={item.id} className="todo-item">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleCompleted(item.id)}
          id={item.id}
        />
        <label
          htmlFor={item.id}
          style={{ textDecoration: item.completed ? 'line-through' : '' }}
        >
          {item.value}
        </label>
        <button onClick={() => toggleDel(item.id)}>x</button>
      </div>
    );
  });
});

export default TodoItem;
