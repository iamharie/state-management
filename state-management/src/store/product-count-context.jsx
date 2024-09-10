import { createContext, useState } from "react";

//CreateContext
export const CreateContext = createContext({
  count: "",
  handleAdd: () => {},
  handleMinus: () => {},
});

//ProvideContext
export default function ProductCountProvider({ children }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const productCtx = {
    count: count,
    handleAdd: handleAdd,
    handleMinus: handleMinus,
  };
  return (
    <CreateContext.Provider value={productCtx}>
      {children}
    </CreateContext.Provider>
  );
}
