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
}

const Main = ({ todos, onRemove, onToggle }: Props) => {

  return (
    <div>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  )
}

export default Main
