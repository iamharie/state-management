import { useContext } from "react";
import { CreateContext } from "../store/product-count-context";

export default function MainStore() {
  const { handleAdd, handleMinus } = useContext(CreateContext);
  return (
    <div className="main-store">
      <p>Main Store</p>
      <em>Store count and Inventory count are related to each other</em>
      <div className="btn">
        <button onClick={handleAdd}>Store +</button>
        <button onClick={handleMinus}>Store -</button>
      </div>
    </div>
  );
}
