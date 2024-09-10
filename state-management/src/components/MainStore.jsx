export default function MainStore({ add, minus }) {
  return (
    <div className="hero-one">
      <em>Store count and Inventory count are related to each other</em>
      <button onClick={add}>Store +</button>
      <button onClick={minus}>Store -</button>
    </div>
  );
}
