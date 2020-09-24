import React, { useCallback, useState } from 'react'

const TodoInput = () => {
  const [content, setContent] = useState<string>()

  const onChange = useCallback(
    (e) => {
      setContent(e.target.value)
    }, [])
    
  return (
    <div>
      <input
        id="new-todo-title"
        className="new-todo"
        value={content}
        onChange={onChange}
        placeholder="할일을 추가해주세요"
      />
    </div>
  )
}

export default TodoInput
