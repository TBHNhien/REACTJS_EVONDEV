import React, { useState } from "react";
import "./ToggleStyles.css";
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
  // const array = useState(false);
  // console.log(array); //[false, function] -> function để update state
  // console.log(array[0]);
  // console.log(array[1]);
  // const arr = [1, 2];
  // console.log(arr[0], arr[1]); // destructor?
  // const [a, b] = [1, 2];
  // console.log(a, b);

  const [on, setOn] = useState(false);
  console.log(on);
  // console.log(on, setOn);
  //const [title,setTitle]
  //[isActive, setIsActive]
  //<div className="toggle" onClick="toggle"></div>;

  const handleToggle = () => {
    // console.log("clicked");
    //setOn(callback)->setOn(prevState=>!precState)
    //c1
    setOn((on) => !on);

    //c2 setOn((on) => {
    //   console.log(on);
    //   return !on;
    // });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
