import { useState } from "react";

export function Newsletter() {
  const [count, setCount] = useState(0)

  return <div>
    sono una newsletter!

    <button onClick={() => setCount(s => s+1)}>CLICK ME {count}</button>
  </div>
}
