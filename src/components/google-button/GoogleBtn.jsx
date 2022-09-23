import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const onClick = () => {};

  return (
    <button className="submit-btn" onClick={onClick}>
      <FaGoogle /> Continue with Google
    </button>
  );
};

export default GoogleBtn;
