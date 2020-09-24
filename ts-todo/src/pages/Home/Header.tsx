import React from 'react'
import TodoInput from '../../components/TodoInput'
import TodoToggleAll from '../../components/TodoToggleAll'

type InputForm = {
  onInput: (content: string) => void
}

const Header = ({onInput}: InputForm) => {
  return (
    <div>
      <h1>TODOS</h1>
      <TodoToggleAll />
      <TodoInput onInput={onInput} />
    </div>
  )
}

export default Header
