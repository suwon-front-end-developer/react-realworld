import classNames from 'classnames';
import React, { useState } from 'react';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

interface ItemForm {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, content: string) => void;
}

const TodoItem = ({ todo, onRemove, onToggle, onEdit }: ItemForm) => {
  const { id, content, isCompleted } = todo;
  const [value, setValue] = useState(content)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  const onHandleType = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const target = (event.target as HTMLElement)
    target.closest('li')?.classList.add('editing')
  }

  const onHandleEdit = (event: React.KeyboardEvent): void => {
    const target = (event.target as HTMLElement)
    const value = (event.target as HTMLInputElement).value
    if (event.key === 'Enter') {
      onEdit(id, value)
      target.closest('li')?.classList.remove('editing')
      return
    }
    if (event.key === 'Escape') {
      target.closest('li')?.classList.remove('editing')
      setValue(content)
      return
    }
  }

  return (
    <>
      <li className={classNames({ completed: isCompleted })} data-id={id}>
        <div className="view">
          <input className="toggle" type="checkbox"
            checked={isCompleted ? true : false}
            onClick={() => onToggle(id)}
          />
          <label className="label" onDoubleClick={(event) => onHandleType(event)}>{content}</label>
          <button className="destroy" onClick={() => onRemove(id)}></button>
        </div>
        <input className="edit" value={value} onChange={(event) => onChange(event)} placeholder={content} onKeyUp={(event) => onHandleEdit(event)} />
      </li>
    </>
  )
}

const TodoList = ({ todos, onRemove, onToggle, onEdit }: Props) => {
  return (
    <div>
      <ul id="todo-list" className="todo-list">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
