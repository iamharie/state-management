export default function MainStore({ add, minus }) {
  return (
    <div className="main-store">
      <p>Main Store</p>
      <em>Store count and Inventory count are related to each other</em>
      <div className="btn">
        <button onClick={add}>Store +</button>
        <button onClick={minus}>Store -</button>
      </div>
    </div>
  );
}
