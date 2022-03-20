import React, { useEffect, useState } from "react";

export const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const setFromEvent = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);
  return (
    <p>
      Mouse Position: {mousePosition.x} , {mousePosition.y}
    </p>
  );
};
