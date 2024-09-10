import { useContext } from "react";
import { CreateContext } from "../store/product-count-context";

export default function Result({ total }) {
  const { count } = useContext(CreateContext);
  return (
    <div className="result">
      <p>Total Products available</p>
      <h3>Selected Products: {count}</h3>
    </div>
  );
}
