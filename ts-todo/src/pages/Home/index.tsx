import React, { useState } from 'react'
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
    content: '타입 뽀개기',
    isCompleted: false
  },
  {
    id: 2,
    content: '타입 뿌수기',
    isCompleted: true
  }
]

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(initialState)

  return (
    <div className="todoapp">
      <Header />
      <Main todos={todos} />
      <Footer />
    </div>
  )
}

export default Home
