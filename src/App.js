import { Fragment, useEffect, useState } from "react";
import TodoForm from "./components/NewTodo/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/utilities/Header";
import Nav from "./components/utilities/Nav";
import "./styles/App.css";

function App(props) {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);
  const getTodoData = (todoData) => {
    todoData.id = Math.random().toString();
    setTodoList((prevTodos) => {
      if (todoList !== []) {
        return [...prevTodos, todoData];
      }
    });

    // localStorage.setItem("todos", JSON.stringify(todoList));
  };
  const getEditData = (editData) => {
    console.log(todoList);
    setTodo(editData);
    setEdit(true);
  };
  // useEffect(() => {
  //   localStorage.getItem("todos");
  // }, [todoList]);

  return (
    <Fragment>
      <Nav />
      <Header />

      <TodoForm
        todo={todo}
        edit={edit}
        todoList={todoList}
        setTodo={setTodo}
        getTodoData={getTodoData}
        getEditData={getEditData}
      />

      <TodoList data={todoList} getEditData={getEditData} />
    </Fragment>
  );
}

export default App;
