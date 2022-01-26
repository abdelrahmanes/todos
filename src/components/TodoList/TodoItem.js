import React, { Fragment, useState } from "react";
import DeleteModal from "../modals/DeleteModal";

export default function TodoItem({ todo, getEditData }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleCompletionHandler = () => {
    setIsCompleted(!isCompleted);
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  const deleteAction = (action) => {
    action === "delete" ? setIsDeleted(true) : setIsDeleted(false);
    setShowModal(false);
  };
  const editHandler = () => {
    getEditData(todo.text);
  };
  return (
    <Fragment>
      <DeleteModal showModal={showModal} deleteAction={deleteAction} />
      {isDeleted ? null : (
        <li
          className="flex  justify-start items-center gap-3 border-b border-slate-800 py-2  hover:bg-gray-700 px-6 mb-2 rounded-3xl transition duration-200"
          key={todo.id}
        >
          <div
            className="flex justify-start items-center cursor-pointer"
            onClick={toggleCompletionHandler}
          >
            <div className="block relative cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-0 h-0 opacity-0 absolute cursor-pointer"
              />
              <span
                className={`absolute -top-3 left-0  border  h-6 w-6 rounded-full ${
                  isCompleted
                    ? "flex justify-center items-center p-1 bg-white text-gray-900 border-white"
                    : "bg-transparent text-white border-indigo-600"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className={`w-4 h-4`}
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  >
                    <path d="M2 20 L12 28 30 4" />
                  </svg>
                ) : null}
              </span>
            </div>
            <p
              className={`${
                isCompleted ? "line-through decoration-white decoration-2" : ""
              } px-8  py-2 text-lg text-white font-todo`}
            >
              {todo.text}
            </p>
          </div>
          <div
            className="flex justify-start items-center gap-4 ml-auto"
            onClick={editHandler}
          >
            <div className="w-10 h-10 p-2 hover:bg-green-500 rounded-full group transition duration-300 cursor-pointer">
              <svg
                className="w-full h-full text-green-500 group-hover:text-white"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
              </svg>
            </div>

            <div
              className="w-10 h-10 p-2 hover:bg-red-500 rounded-full group transition duration-300 cursor-pointer"
              onClick={showModalHandler}
            >
              <svg
                className="w-full h-full text-red-500 group-hover:text-white"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
              </svg>
            </div>
          </div>
        </li>
      )}
    </Fragment>
  );
}
