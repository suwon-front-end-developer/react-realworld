import React, { useCallback, useState } from 'react'

type InputForm = {
  onInput: (content: string) => void
}

const TodoInput = ({ onInput }: InputForm) => {
  const [content, setContent] = useState<string>('')

  const onChange = useCallback(
    (e) => {
      setContent(e.target.value)
    }, [])

  const onSubmit = useCallback(
    (e) => {
      content && onInput(content);
      setContent('');
      e.preventDefault();
    },
    [content, onInput],
  )

  return (
    <form onSubmit={onSubmit}>
      <input
        id="new-todo-title"
        className="new-todo"
        value={content}
        onChange={onChange}
        placeholder="할일을 추가해주세요"
      />
    </form>
  )
}

export default TodoInput
