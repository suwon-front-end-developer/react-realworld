import React from 'react'
import TodoInput from '../../components/TodoInput'
import TodoToggleAll from '../../components/TodoToggleAll'

const Header = () => {
  return (
    <div>
      <h1>TODOS</h1>
      <TodoToggleAll />
      <TodoInput />
    </div>
  )
}

export default Header
