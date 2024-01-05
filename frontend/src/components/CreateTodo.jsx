import React, { useState } from 'react'

const CreateTodo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
        <input id='title' style={{
            padding: 10,
            margin: 10,
            borderRadius: 4
        }} type="text" placeholder='title' onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }} />
        <br />
        <input id='desc' style={{
            padding: 10,
            margin: 10,
            borderRadius: 4
        }} type="text" placeholder='description' onChange={(e) => {
          const desc = e.target.value;
          setDescription(desc);
        }} />
        <br />
        <button onClick={() => {
          fetch("https://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              "Content-type": "application/json"
            }
          })
          .then(async function(res) {
            const json = await res.json();
            alert("todo added");
          })
        }} style={{
            padding: 10,
            margin: 10,
            borderRadius: 7,
            cursor: 'pointer'
        }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo