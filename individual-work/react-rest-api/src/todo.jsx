import React, { useId } from "react";

const Todo = (props) => {
  return (
    <div>
      <div
        class="h-28 w-80 grid content-between outline outline-2 outline-slate-500" key={props.id}>
        <p class="grid items-center pl-2 h-14 bg-gray-400">{props.title}</p>
        <p class="pl-2">{props.userId}</p>
        <p class="pl-2 pb-1">{props.id}</p>
      </div>
    </div>
  );
};

export default Todo;
