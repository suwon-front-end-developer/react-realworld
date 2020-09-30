import React, { useCallback, useRef, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

const initialState: Todo[] = [
  {
    id: 1,
    content: '타입 뽀개기1',
    isCompleted: false
  },
  {
    id: 2,
    content: '타입 뿌수기2',
    isCompleted: true
  }
]

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(initialState)
  const nextId = useRef<number>(3)

  const onInput = useCallback(
    content => {
      const todo = {
        id: nextId.current,
        content,
        isCompleted: false
      }
      setTodos([...todos, todo])
      nextId.current += 1
    },
    [todos]
  )

  const onRemove = useCallback(
    (id) => {
      const newTodo = todos.filter(todo => todo.id !== id);
      setTodos(newTodo);
    },
    [todos],
  )

  const onToggle = useCallback(
    (id) => {
      const index = todos.findIndex(todo => todo.id === id);
      let newTodo = [...todos]
      newTodo[index].isCompleted = !todos[index].isCompleted;
      setTodos(newTodo)
    },
    [todos],
  )

  const onEdit = useCallback(
    (id, content) => {
      const index = todos.findIndex(todo => todo.id === id);
      let newTodo = [...todos]
      newTodo[index].content = content;
      setTodos(newTodo)
    },
    [todos],
  )

  return (
    <div className="todoapp">
      <Header onInput={onInput} />
      <Main todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
      <Footer />
    </div>
  )
}

export default Home
