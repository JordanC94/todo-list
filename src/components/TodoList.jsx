import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const toggleTodo = (index) => {
    console.log(index);
    const updatedTodos = todoList.map((todo, i) => {
      if (index === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };
  const handleTodoDelete = (delIndex) => {
    const filteredTodo = todoList.filter((todo, index) => {
      return index !== delIndex;
    });

    setTodo(filteredTodo);
  };
  const handleForm = (e) => {
    e.preventDefault();
    const todoItem = { todoKey: todo, complete: false };
    setTodoList([...todoList, todoItem]);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card mb-3">
            <div className="card-header">
              <h2>Todo List</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleForm}>
                <label>What to do:</label>
                <input onChange={(e) => setTodo(e.target.value)} type="text" />
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                {todoList.map((todo, index) => {
                  return (
                    <div
                      className="d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <p
                        style={{
                          textDecoration: todo.complete && "line-through",
                        }}
                      >
                        {todo.todoKey}
                      </p>
                      <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => toggleTodo(index)}
                      />
                      <button
                        onClick={(e) => {
                          handleTodoDelete(index);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
