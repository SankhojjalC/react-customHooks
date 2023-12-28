import { counter } from "./counter";

const B = ({ count, handleCounter }) => {
  return (
    <>
      <h1>Inside B</h1>
      <button onMouseOver={handleCounter}>MouseOver of: {count}</button>
    </>
  );
};

export default counter(B);
