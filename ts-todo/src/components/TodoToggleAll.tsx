import React, { useState } from 'react'

interface Props {
  onToggleAll: (type: boolean) => void
  isCheckedToggleAll: () => boolean
}

const TodoToggleAll = (props: Props) => {
  const { onToggleAll, isCheckedToggleAll } = props
  const [isChecked, setIsChecked] = useState<boolean>(isCheckedToggleAll())
  const onHandleToggleAll = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void => {
    if (isChecked) {
      onToggleAll(false)
      setIsChecked(false)
    } else {
      onToggleAll(true)
      setIsChecked(true)

    }

  }
  return (
    <div>
      <input className="toggle-all" type="checkbox" checked={isChecked} />
      <label className="toggle-all-label" onClick={(event) => onHandleToggleAll(event)} ></label>
    </div>
  )
}

export default TodoToggleAll
