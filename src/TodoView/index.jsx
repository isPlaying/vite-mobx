import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './index.less';
const TodoView = observer(({ todo }) => {
  const [input, setInput] = useState('');
  const submit = () => {
    todo.addItem(input);
    setInput('');
  };

  const toggle = (id) => {
    todo.checkToggle(id);
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={submit}>submit</button>
      </div>
      {todo.list.map((item) => {
        return (
          <div className="todo-item" key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggle(item.id)}
              id={item.id}
            />
            <label
              htmlFor={item.id}
              style={{ textDecoration: item.completed ? 'line-through' : '' }}
            >
              {item.value}
            </label>
          </div>
        );
      })}
      <div>共计{todo.total}项任务</div>
      {todo.unComplete === 0 ? (
        <div>All Completed</div>
      ) : (
        <div>剩余{todo.unComplete}项任务尚未完成</div>
      )}
    </div>
  );
});

export default TodoView;
