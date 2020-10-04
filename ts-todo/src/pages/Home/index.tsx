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
  const [filterType, setFilterType] = useState<string>('all')
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
      newTodos.forEach(todo => todo.isCompleted = type)
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

  const onFilter = useCallback(
    (type) => {
      switch (type) {
        case 'active':
          setFilterType('active')
          break;
        case 'completed':
          setFilterType('completed')
          break;
        default:
          setFilterType('all')
          break;
      }
    },
    [],
  )

  const filteringTodos = useCallback(
    () => {
      switch (filterType) {
        case 'active':
          return todos.filter(todo => todo.isCompleted === false)
        case 'completed':
          return todos.filter(todo => todo.isCompleted === true)
        default:
          return todos
      }
    },
    [filterType, todos],
  )


  return (
    <div className="todoapp">
      <Header onInput={onInput} onToggleAll={onToggleAll} isCheckedToggleAll={isCheckedToggleAll} />
      <Main todos={filteringTodos()} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} filteringTodos={filteringTodos} />
      <Footer onFilter={onFilter} todoLength={todos.length} filteredTodoLength={filteringTodos().length} />
    </div>
  )
}

export default Home
