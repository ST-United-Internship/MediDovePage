import { Spin } from "antd";

const CustomSpin = ({ size = "large" }) => {
  const style = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return <Spin style={style} size={size} />;
};

export default CustomSpin;
