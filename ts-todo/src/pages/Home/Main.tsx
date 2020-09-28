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
}

const Main = ({ todos, onRemove }: Props) => {

  return (
    <div>
      <TodoList todos={todos} onRemove={onRemove} />
    </div>
  )
}

export default Main
