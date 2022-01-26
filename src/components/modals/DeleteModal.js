import React, { Fragment } from "react";

export default function DeleteModal(props) {
  return (
    <Fragment>
      {props.showModal ? (
        <div className="fixed bg-black bg-opacity-40 top-0 right-0 bottom-0 left-0 flex justify-center items-center ">
          <div className="bg-gray-900 w-1/3 m-auto text-white rounded-md pb-8">
            <div className="w-full rounded-t-md bg-red-700 text-white text-5xl font-sharp  px-4 py-2 mb-3 text-center">
              Alert
            </div>
            <p className="text-4xl font-todo px-6 pt-2">
              Are you sure you want to delete this task?
            </p>
            <div className="flex justify-end items-center gap-3 px-4 mt-10">
              <button
                className="bg-white text-gray-900 px-2 py-1 rounded-md "
                onClick={() => {
                  props.deleteAction("cancel");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-500 tranistion duration-300"
                onClick={() => {
                  props.deleteAction("delete");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
