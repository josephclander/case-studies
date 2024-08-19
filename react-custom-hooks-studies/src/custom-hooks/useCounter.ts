import { useState } from "react";

export const useCounter = () => {
  // removed '<number>' declaration as it's inferred
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  // by using 'as const' you tell typescript
  // these values cannot be mutated
  return [count, increment] as const;
};
