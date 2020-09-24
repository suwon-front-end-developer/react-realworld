import React from 'react'

interface Props {

}

const TodoToggleAll = (props: Props) => {
  return (
    <div>
      <input className="toggle-all" type="checkbox" />
      <label className="toggle-all-label"></label>
    </div>
  )
}

export default TodoToggleAll
