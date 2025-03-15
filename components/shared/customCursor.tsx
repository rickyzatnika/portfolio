"use client";

import { useCursor } from "@/context/CursorContex";



const CustomCursor = () => {
  const cursorContext = useCursor();
  const position = cursorContext?.position ?? { x: 0, y: 0 };
  // const isHover = cursorContext?.isHover ?? false;

  return (
    <div
      className="hidden lg:block fixed bg-primary/40 pointer-events-none backdrop-blur-[3px]  transition-all duration-300 ease-linear  "
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "fixed",
        pointerEvents: "none",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "background-color 0.3s",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
