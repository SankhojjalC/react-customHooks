/* eslint-disable react/display-name */
import { useState } from "react";

export const counter = (WrappedComponent) => {
  return function (props) {
    console.log("sankho-pops", props);
    const [count, setCount] = useState(0);

    const handleCounter = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        handleCounter={handleCounter}
        {...props}
      />
    );
  };
};
