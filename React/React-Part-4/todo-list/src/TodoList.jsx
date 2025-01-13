import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos,newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
