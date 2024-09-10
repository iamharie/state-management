export default function Inventory({ add, minus }) {
  return (
    <div>
      <p>Inventory</p>
      <em>Invemtory count and Store count are related to each other</em>
      <button onClick={add}>Inventory +</button>
      <button onClick={minus}>Inventory -</button>
    </div>
  );
}
