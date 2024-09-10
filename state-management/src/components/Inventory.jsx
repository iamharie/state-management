export default function Inventory({ add, minus }) {
  return (
    <div className="inventory">
      <p>Inventory</p>
      <em>Invemtory count and Store count are related to each other</em>
      <div className="btn">
        <button onClick={add}>Inventory +</button>
        <button onClick={minus}>Inventory -</button>
      </div>
    </div>
  );
}
