import React from 'react'
import TodoInput from '../../components/TodoInput'
import TodoToggleAll from '../../components/TodoToggleAll'

type InputForm = {
  onInput: (content: string) => void
  onToggleAll: (type: boolean) => void
  isCheckedToggleAll: () => boolean
}

const Header = ({onInput, onToggleAll, isCheckedToggleAll}: InputForm) => {
  return (
    <div>
      <h1>TODOS</h1>
      <TodoToggleAll onToggleAll={onToggleAll} isCheckedToggleAll={isCheckedToggleAll} />
      <TodoInput onInput={onInput} />
    </div>
  )
}

export default Header
