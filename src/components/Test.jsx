import React from "react";

export default function Test() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Test", count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
