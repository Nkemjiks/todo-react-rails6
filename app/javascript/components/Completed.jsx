import React from 'react';

const Completed = ({ completed }) => {
  return (
    <div>
      <h4>Completed</h4>
      {completed.map((todo, i) => {
        return (
          <div className="form-check" key={i}>
            <input className="form-check-input" type="checkbox" checked={todo.completed} value="" id={`checkbox${todo.id}`} disabled />
            <label className="form-check-label" htmlFor={`checkbox${todo.id}`}>
              {todo.title}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Completed;