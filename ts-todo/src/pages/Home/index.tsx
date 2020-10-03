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
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    },
    [todos],
  )

  const onToggle = useCallback(
    (id) => {
      const index = todos.findIndex(todo => todo.id === id);
      let newTodos = [...todos]
      newTodos[index].isCompleted = !todos[index].isCompleted;
      setTodos(newTodos)
    },
    [todos],
  )

  const onToggleAll = useCallback(
    (type) => {
      let newTodos = [...todos]
      newTodos.map(todo => todo.isCompleted = type)
      setTodos(newTodos)
    }, [todos]
  )

  const onEdit = useCallback(
    (id, content) => {
      const index = todos.findIndex(todo => todo.id === id);
      let newTodos = [...todos]
      newTodos[index].content = content;
      setTodos(newTodos)
    },
    [todos],
  )

  const isCheckedToggleAll = useCallback(
    () => {
      const index = todos.findIndex(todo => todo.isCompleted === false);
      if (index === -1) {
        return true
      } else {
        return false
      }
    },
    [todos],
  )

  return (
    <div className="todoapp">
      <Header onInput={onInput} onToggleAll={onToggleAll} isCheckedToggleAll={isCheckedToggleAll} />
      <Main todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} />
      <Footer />
    </div>
  )
}

export default Home
