import React from 'react';
import { observer } from 'mobx-react';

const TodoTotal = observer(({ todo }) => {
  return (
    <>
      <div>共计{todo.total}项任务</div>
      {todo.unComplete === 0 ? (
        <div>All Completed</div>
      ) : (
        <div>剩余{todo.unComplete}项任务尚未完成</div>
      )}
    </>
  );
});

export default TodoTotal;
