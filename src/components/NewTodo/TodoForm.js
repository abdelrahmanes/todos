import React, { useState } from "react";
import Card from "../utilities/Card";

export default function TodoForm(props) {
  const inputChangeHandler = (e) => {
    props.setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!props.edit) {
      const data = {
        text: props.todo,
      };
      props.getTodoData(data);
    } else {
      const valueToEdit = props.todoList.find((input) => {
        return input.text == props.todo;
      });
      console.log(valueToEdit);
    }

    props.setTodo("");
  };

  return (
    <Card position={true}>
      <form action="submit" onSubmit={submitHandler}>
        <div className="flex justify-start items-center gap-3">
          <label htmlFor="todo" className="cursor-pointer">
            <svg
              className="w-8 h-8 text-gray-500"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
            </svg>
          </label>
          <div className="w-full">
            <input
              id="todo"
              onChange={inputChangeHandler}
              type="text"
              value={props.todo}
              name="todo"
              className="text-white bg-gray-900 rounded-md w-full placeholder-gray-500 focus:outline-none caret-purple-700 py-2 px-4 "
              placeholder="Write down your next goal..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-transparent border-2 border-gray-500 px-2 py-2 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-black transition duration-150 hover:border-white"
          >
            <svg
              className="w-4 h-4 "
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
            >
              {props.edit ? (
                <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
              ) : (
                <path d="M16 2 L16 30 M2 16 L30 16" />
              )}
            </svg>
          </button>
        </div>
      </form>
    </Card>
  );
}
