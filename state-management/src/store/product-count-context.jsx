import { createContext, useReducer, useState } from "react";

//CreateContext
export const CreateContext = createContext({
  count: "",
  handleAdd: () => {},
  handleMinus: () => {},
});

//Use reducer:
const reducer = function (currState, action) {
  if (action.id == "add") {
    return { count: currState.count + 1 };
  }
  if (action.id == "sub") {
    return { count: currState.count - 1 };
  }
  return currState;
};

//ProvideContext
export default function ProductCountProvider({ children }) {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleAdd() {
    // setCount(count + 1);
    dispatch({ id: "add" });
  }
  function handleMinus() {
    // if (count > 0) {
    //   setCount(count - 1);
    // }
    dispatch({ id: "sub" });
  }

  const productCtx = {
    count: state.count,
    handleAdd: handleAdd,
    handleMinus: handleMinus,
  };
  return (
    <CreateContext.Provider value={productCtx}>
      {children}
    </CreateContext.Provider>
  );
}
