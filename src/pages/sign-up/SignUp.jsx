import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import "./SignUp.scss";
import GoogleBtn from "../../components/google-button/GoogleBtn";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const { name, email, password } = formData;

  const eyeIcon = show ? (
    <BiShowAlt fill="#034867" size="1.2rem" />
  ) : (
    <BiHide fill="#034867" size="1.2rem" />
  );

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container">
      <header className="signIn-heading">
        <h1 className="page-heading">Create an Account</h1>
      </header>
      <main className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-control name">
            <label htmlFor="email">Name</label>
            <input type="text" id="name" value={name} onChange={onChange} />
          </div>
          <div className="form-control email">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={onChange} />
          </div>
          <div className="form-control password">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={show ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
              />
              <button onClick={() => setShow(!show)} className="eyeBtn">
                {eyeIcon}
              </button>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <p className="or">Or</p>
        <GoogleBtn />
      </main>
    </div>
  );
};

export default SignUp;
