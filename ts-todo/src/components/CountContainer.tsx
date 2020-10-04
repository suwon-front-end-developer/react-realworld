import React from 'react';
import TodoCount from './TodoCount';
import TodoFilter from './TodoFilter';

interface Props {
  filteredTodoLength: number;
  onFilter: (type: string) => void;
}

const CountContainer = (props: Props) => {
  const { filteredTodoLength, onFilter } = props;

  return (
    <div className="count-container">
      <TodoCount filteredTodoLength={filteredTodoLength} />
      <TodoFilter onFilter={onFilter} />
    </div>
  )
}

export default CountContainer
