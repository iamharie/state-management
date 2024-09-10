import { useContext } from "react";
import { CreateContext } from "../store/product-count-context";

export default function Inventory({ add, minus }) {
  const { handleAdd, handleMinus } = useContext(CreateContext);
  return (
    <div className="inventory">
      <p>Inventory</p>
      <em>Invemtory count and Store count are related to each other</em>
      <div className="btn">
        <button onClick={handleAdd}>Inventory +</button>
        <button onClick={handleMinus}>Inventory -</button>
      </div>
    </div>
  );
}
