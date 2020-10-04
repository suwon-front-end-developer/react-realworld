import React from 'react'

interface Props {
  onToggleAll: (type: boolean) => void
  isCheckedToggleAll: () => boolean
}

const TodoToggleAll = (props: Props) => {
  const { onToggleAll, isCheckedToggleAll } = props
  const onHandleToggleAll = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void => {
    if (isCheckedToggleAll()) {
      onToggleAll(false)
    } else {
      onToggleAll(true)
    }
  }

  return (
    <div>
      <input className="toggle-all" type="checkbox" checked={isCheckedToggleAll()} />
      <label className="toggle-all-label" onClick={(event) => onHandleToggleAll(event)} ></label>
    </div>
  )
}

export default TodoToggleAll
