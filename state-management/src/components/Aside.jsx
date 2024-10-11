import { useEffect, useState } from "react";

export default function Aside() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>useEffect()</button> */}
      <p>{count}</p>
    </div>
  );
}
