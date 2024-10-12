import { useReducer } from "react";

const reducer = function (currentState, action) {
  if (action.type == "add") {
    return { initialValue: currentState.initialValue + 1 };
  }
  if (action.type == "sub") {
    return { initialValue: currentState.initialValue - 1 };
  }
  return currentState;
};
export default function TemplateReducer() {
  const [state, dispatch] = useReducer(reducer, { initialValue: 0 });

  function handleAdd() {
    dispatch({ type: "add" });
  }
  function handleSub() {
    dispatch({ type: "sub" });
  }

  return (
    <>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUB</button>
      <p>Answer: {state.initialValue}</p>
      <p>
        I am using useReducer() Hook here to learn and practice the state
        management
      </p>
    </>
  );
}

// 1. import useReducer from React.
// 2. declare the useReducer hook: reducerFunction and state
