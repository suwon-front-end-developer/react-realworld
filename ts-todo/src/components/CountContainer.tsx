import React from 'react'
import TodoCount from './TodoCount'
import TodoFilter from './TodoFilter'

const CountContainer: React.FC = () => {
  return (
    <div className="count-container">
      <TodoCount />
      <TodoFilter />
    </div>
  )
}

export default CountContainer
