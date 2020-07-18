import React from 'react';
import PendingItems from './PendingItems';

const Pending = ({ pending }) => {
  const handleSubmit = (body) => {
    const url = "/todos/update";
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "PUT",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        console.log(response);
      })
      .catch(() => console.log('An error occurred while adding the todo item'));
  }
  return (
    <div>
      <h4>Pending</h4>
      {pending.map((todo, i) => {
        return (
          <PendingItems key={i} todo={todo} handleSubmit={handleSubmit} />
        )
      })}
    </div>
  )
}

export default Pending;