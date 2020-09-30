import React from 'react';
import TodoList from '../../components/TodoList';

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

const Main = ({ todos, onRemove, onToggle, onEdit }: Props) => {

  return (
    <div>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
    </div>
  )
}

export default Main
