import React from "react";

/* todos = [
        {
            title: kuch bhi,
            description: kuch bhi
        }
    ]
*/

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <>
          <h1
            style={{
              fontSize: 30,
            }}
          >
            {todo.title}
          </h1>
          <h2
            style={{
              fontSize: 25,
            }}
          >
            {todo.description}
          </h2>
          <button
            style={{
              padding: 7,
              textAlign: "center",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            {todo.completed == true ? "completed" : "complete"}
          </button>
        </>
      ))}
    </div>
  );
};

export default Todos;
