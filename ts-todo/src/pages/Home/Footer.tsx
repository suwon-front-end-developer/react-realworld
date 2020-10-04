import React from 'react';
import CountContainer from '../../components/CountContainer';

interface Props {
  todoLength: number;
  filteredTodoLength: number;
  onFilter: (type: string) => void;
}

const Footer = (props: Props) => {
  const { todoLength, filteredTodoLength, onFilter } = props;
  const checkLength = todoLength > 0

  return (
    <div>
      {checkLength && <CountContainer filteredTodoLength={filteredTodoLength} onFilter={onFilter} />}
    </div>
  )
}

export default Footer
