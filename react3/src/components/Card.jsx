import React from "react";

export const CardBlue = () => {
  return <div>CardBlue</div>;
};

const Card = (props) => {
  console.log("Card props:", props);
  const { data} = props;
  return(
  <div>Card
    <p>Data z App.jsx: {data}</p>
  </div>
  ) 
};

export default Card;
