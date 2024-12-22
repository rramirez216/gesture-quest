import React from "react";

function useMouseDownUp(movement = { x: 0, y: 0 }) {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [offset, setOffSet] = React.useState({ offsetX: 0, offsetY: 0 });

  React.useEffect(() => {
    if (isMouseDown === true) {
      //if ((movement.x > 0 && move) || movement.x < 0) {
      let { offsetX, offsetY } = {
        offsetX: offset.offsetX + movement.x,
        offsetY: offset.offsetY + movement.y,
      };
      setOffSet({ offsetX, offsetY });
      console.log("X:", offsetX, "Y:", offsetY);
      //}

      /*      if (movement.y > 0 || movement.y < 0) {
        let { offsetX, offsetY } = {
          offsetX: offset.offsetX,
          offsetY: offset.offsetY + movement.y,
        };
        setOffSet({ offsetX, offsetY });
        //console.log("Y:", offsetY);
      }*/
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
