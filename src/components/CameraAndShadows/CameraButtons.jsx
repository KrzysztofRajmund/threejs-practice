import state from "../../state";

const inlineStyling = {
  zIndex: 1,
  position: "absolute",
  bottom: "15vh",
  height: "50px",
  width: "50px",
  backgroundColor: "rgb(0,0,0,0.5)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid grey",
  borderRadius: "50%",
  cursor: "pointer",
};

const CameraButtons = ({}) => {
  const setCamera = [
    {
      cameraPos: [5, 5, 5],
      target: [1, 1, 1],
    },
    {
      cameraPos: [5, 5, -5],
      target: [4, 5, 1],
    },
  ];

  const handleClick = (number) => {
    state.cameraPos.set(...setCamera[number].cameraPos);
    state.target.set(...setCamera[number].target);
    state.shouldUpdate = true;
  };

  return (
    <>
      <buttons
        onClick={() => handleClick(1)}
        style={{ ...inlineStyling, left: "40vw" }}
      >
        {"<"}
      </buttons>
      <buttons
        onClick={() => handleClick(0)}
        style={{ ...inlineStyling, right: "40vw" }}
      >
        {">"}
      </buttons>
    </>
  );
};

export default CameraButtons;
