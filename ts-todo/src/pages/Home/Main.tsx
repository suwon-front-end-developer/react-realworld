import React from 'react'
import TodoList from '../../components/TodoList'

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
}

const Main = ({todos}: Props) => {
  console.log(todos);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default Main
