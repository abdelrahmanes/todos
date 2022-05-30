import React, { useEffect } from "react";
import Card from "../utilities/Card";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  // useEffect(() => {
  //   console.log(props.data);
  // }, [props.data]);

  return (
    <div className={`${props.data.length === 0 ? "hidden" : null}`}>
      <div className=" pt-10 w-3/5 m-auto mt-10 ">
        <h2 className="font-sharp text-3xl text-black drop-shadow-2xl">
          You should finish these goals ASAP!!!
        </h2>
      </div>
      <Card position={false}>
        <ul>
          {props.data.map((todo, index) => {
            return (
              <TodoItem
                data={props.data}
                todo={todo}
                id={todo.id}
                getEditData={props.getEditData}
                deleteAction={props.delete}
              />
            );
          })}
        </ul>
      </Card>
    </div>
  );
}
