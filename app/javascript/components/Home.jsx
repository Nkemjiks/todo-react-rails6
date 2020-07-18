import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Pending from './Pending';
import Completed from './Completed';

const Home  = () => {
  const [todos, setTodos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "/todos/all_todos";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        setTodos(response);
        setLoading(false);
      })
      .catch(() => console.log('An error occurred while fetching the todos'));
  }, []);

  return (
    <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Todo</h1>
          <p className="lead">
            A curated list of recipes for the best homemade meal and delicacies.
          </p>
          <hr className="my-4" />
          {
            loading ? <Loader /> : (
              <div>
                <Pending pending={todos.pending} />
                <hr className="my-4" />
                <Completed completed={todos.completed} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;