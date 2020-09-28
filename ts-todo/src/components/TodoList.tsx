import classNames from 'classnames';
import React from 'react';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
  onRemove: (id: number) => void;
}

interface ItemForm {
  todo: Todo;
  onRemove: (id: number) => void;
}

const TodoItem = ({ todo, onRemove }: ItemForm) => {
  const { id, content, isCompleted } = todo;

  return (
    <>
      <li className={classNames({ completed: isCompleted })} data-id={id}>
        <div className="view">
          <input className="toggle" type="checkbox"
            checked={isCompleted ? true : false}
          />
          <label className="label">{content}</label>
          <button className="destroy" onClick={() => onRemove(id)}></button>
        </div>
        <input className="edit" placeholder={content} />
      </li>
    </>
  )
}

const TodoList = ({ todos, onRemove }: Props) => {
  return (
    <div>
      <ul id="todo-list" className="todo-list">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
