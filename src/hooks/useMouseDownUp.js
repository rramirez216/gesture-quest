import React from "react";

function useMouseDownUp(movement = { x: 0, y: 0 }) {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [offset, setOffSet] = React.useState({ offsetX: 0, offsetY: 0 });
  React.useEffect(() => {
    if (isMouseDown === true) {
      console.log(movement);
      if (movement.x > 0) {
        let sum = offset.offsetX + 5;
        setOffSet({ offsetX: sum, offsetY: offset.offsetY });
      } else if (movement.x < 0) {
        let sum = offset.offsetX - 5;
        setOffSet({ offsetX: sum, offsetY: offset.offsetY });
      }
    }
  }, [isMouseDown, movement]);

  function handleMouseDown(event) {
    event.preventDefault();
    setIsMouseDown(true);
  }
  function handleMouseUp() {
    setIsMouseDown(false);
  }

  return { handleMouseDown, handleMouseUp, offset };
}

export default useMouseDownUp;
