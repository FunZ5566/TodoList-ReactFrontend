import React from 'react';
const TodoItems = ({ todos, handleUpdate, handleDelete }) => {
    const done = 2;
    const notDone = 1;
    return (
        <ul>
            {todos.map((todo, index) => (
                <li
                    className={todo.status === done ? 'checked' : ''}
                    key={index}
                    onClick={() => {
                        const data = {status: done};
                        if (todo.status === done) {
                            data.status = notDone;
                        }
                        // 呼叫由props傳遞過來的handleUpdate()
                        handleUpdate(todo.id, data);
                    }}>
                    {todo.task} <span className="badge bg-danger">生活</span>
                    <span
                        className="close"
                        onClick={(event) => {
                            event.stopPropagation();
                            handleDelete(todo.id);
                        }}>
      X
</span>
                </li>
            ))}
        </ul>
    );
};

export default TodoItems;