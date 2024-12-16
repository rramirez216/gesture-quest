import React from "react";

function useMouseMove() {
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });
  function handleMouseMove(event) {
    //console.log("movementX: ", event.movementX, "movementY: ", event.movementY);
    setCoordinates({ x: event.movementX, y: event.movementY });
  }
  return { coordinates, setCoordinates, handleMouseMove };
}

export default useMouseMove;
