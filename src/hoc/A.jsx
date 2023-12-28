import { counter } from "./counter";

const A = ({ count, handleCounter }) => {
  return (
    <>
      <h1>Inside A</h1>
      <button onClick={handleCounter}>Click: {count}</button>
    </>
  );
};

export default counter(A);
