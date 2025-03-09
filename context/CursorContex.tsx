"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CursorContextType {
  position: { x: number; y: number; elementId: string };
  isHover: boolean;
  handleCursorHover: (isHover: boolean, elementId: string) => void;
  handleElementMove: (position: { x: number; y: number; elementId: string }) => void;
  setInitialButtonPositions: (position: { x: number; y: number; elementId: string }) => void;
  buttonPositions: { [key: string]: { x: number; y: number } };
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => useContext(CursorContext);

// CursorProvider component
export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, elementId: "" });
  const [isHover, setIsHover] = useState(false);
  const [buttonPositions, setButtonPositions] = useState({});

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []); // No dependency needed for position updates

  useEffect(() => {
    // Ensure the elementId is updated based on hover state
    if (!isHover) {
      setPosition((prev) => ({ ...prev, elementId: "" }));
    }
  }, [isHover]); // Update elementId based on isHover

  const handleCursorHover = (isHover: boolean, elementId: string) => {
    setIsHover(isHover);
    setPosition((prev) => ({ ...prev, elementId }));
  };

  const handleElementMove = (position: { x: number; y: number; elementId: string }) => {
    setPosition(position);
  };

  const setInitialButtonPositions = (position: { x: number; y: number; elementId: string }) => {
    setButtonPositions((prev) => ({
      ...prev,
      [position.elementId]: { x: position.x, y: position.y },
    }));
  };

  return (
    <CursorContext.Provider
      value={{
        position,
        isHover,
        handleCursorHover,
        handleElementMove,
        setInitialButtonPositions,
        buttonPositions,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
