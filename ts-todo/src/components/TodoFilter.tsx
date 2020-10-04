import React from 'react';

interface Props {
  onFilter: (type: string) => void;
}

const TodoFilter = (props: Props) => {
  const { onFilter } = props;

  const onHandleFilterType = (event: React.MouseEvent): void => {
    const target = (event.target as HTMLElement)
    const currentTarget = (event.currentTarget as HTMLElement)
    currentTarget.querySelector('a.selected')?.classList.remove('selected')
    target?.classList.add('selected')

    if (target?.classList.contains('all')) {
      onFilter('all')
      return
    }
    if (target?.classList.contains('active')) {
      onFilter('active')
      return
    }
    if (target?.classList.contains('completed')) {
      onFilter('completed')
      return
    }
  }

  return (
    <div>
      <ul className="filters" onClick={(event) => onHandleFilterType(event)}>
        <li>
          <a className="all selected" href="/#">전체보기</a>
        </li>
        <li>
          <a className="active" href="#active">해야할 일</a>
        </li>
        <li>
          <a className="completed" href="#completed">완료한 일</a>
        </li>
      </ul>
    </div>
  )
}

export default TodoFilter