import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const { email, password } = formData;

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
        <h1 className="page-heading">
          Welcome Back <span className="wave">👋</span>
        </h1>
        <p className="page-link">
            Not registered? <Link to="/sign-up">Sign Up</Link>
        </p>
      </header>
      <main className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-control email">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={onChange} />
          </div>
          <div className="form-control">
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
          <div className="forgot-password">
            <p> </p>
            <Link to="/forgot-password" className="forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
