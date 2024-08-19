// ./src/components/MousePosition.tsx
import { useMousePosition } from "../custom-hooks/useMousePosition";

const MousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <section>
      <h2>useMousePosition()</h2>
      <div className="display">
        <p>x: {x}</p>
        <p>y: {y}</p>
      </div>
    </section>
  );
};

export default MousePosition;
