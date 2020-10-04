import React from 'react';

interface Props {
  filteredTodoLength: number;
}

const TodoCount = (props: Props) => {
  const { filteredTodoLength } = props;

  return (
    <div>
      <span className="todo-count">총 <strong>{filteredTodoLength}</strong> 개</span>
    </div>
  )
}

export default TodoCount
