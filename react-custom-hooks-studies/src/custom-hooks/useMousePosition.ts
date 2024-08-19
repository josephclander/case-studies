// ./src/custom-hooks/useMousePosition.ts
import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // remembered to give the type of the event
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
    // removed xPos and yPos from dependency array
    // the event listener is taking care of the values
    // so even though the values change,
    // it's not based on logic in state.
  }, []);

  return position;
};
