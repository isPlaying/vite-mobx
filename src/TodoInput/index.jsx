import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './index.less';

const TodoInput = observer(({ todo }) => {
  const [input, setInput] = useState('');
  const submit = () => {
    console.log(todo, 'ddd');
    todo.addItem(input);
    setInput('');
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={submit}>submit</button>
    </div>
  );
});
export default TodoInput;
