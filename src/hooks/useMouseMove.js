import React from "react";

function useMouseMove() {
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });
  function handleMouseMove(event) {
    setCoordinates({ x: event.movementX, y: event.movementY });
  }
  return { coordinates, setCoordinates, handleMouseMove };
}

export default useMouseMove;
