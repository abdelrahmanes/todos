import React from "react";
import Card from "../utilities/Card";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div className={`${props.data.length === 0 ? "hidden" : null}`}>
      <div className=" pt-10 w-3/5 m-auto mt-10 ">
        <h2 className="font-sharp text-3xl text-black drop-shadow-2xl">
          You should finish these goals ASAP!!!
        </h2>
      </div>
      <Card position={false}>
        <ul>
          {props.data.map((todo) => {
            return <TodoItem todo={todo} getEditData={props.getEditData} />;
          })}
        </ul>
      </Card>
    </div>
  );
}
