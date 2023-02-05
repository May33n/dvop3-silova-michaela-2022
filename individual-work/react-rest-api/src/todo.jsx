import React, { useId } from "react";

const Todo = (props) => {
  const {title, userId, id} = props;
  return(
  <div >
    <p>{title}</p>
    <p>{userId}</p>
    <p>{id}</p>
  </div>
  ) 
};

export default Todo;