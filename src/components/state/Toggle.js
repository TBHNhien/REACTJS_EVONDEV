import React, { useState } from "react";
// stateless functional component :component không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

//stateful functional component: component có sử dụng state
// function Toggle2() {
//   // const[count , setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  const array = useState(false);
  console.log(array);
  return <div className="toggle"></div>;
}
export default Toggle;
