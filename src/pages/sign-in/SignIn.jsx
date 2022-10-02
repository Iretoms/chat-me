import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { BiShowAlt, BiHide } from "react-icons/bi";
import "./SignIn.scss";
import GoogleBtn from "../../components/google-button/GoogleBtn";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = formData;

  const eyeIcon = show ? (
    <BiHide fill="#034867" size="1.2rem" />
  ) : (
    <BiShowAlt fill="#034867" size="1.2rem" />
  );

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,10}$/)) {
      try {
        const auth = getAuth();

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (userCredential.user) {
          navigate("/");
        }
      } catch (error) {
        toast.error("Sorry you dont have an account, please Sign Up");
      }
    } else {
      setErrorMessage(
        "*should contain atleast one uppercase, lowercase and number"
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
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
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={show ? "text" : "password"}
                id="password"
                required
                value={password}
                onChange={onChange}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="eyeBtn"
              >
                {eyeIcon}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <p>{errorMessage}</p>
            <Link to="/forgot-password" className="forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        <p className="or">Or</p>
        <GoogleBtn />
      </main>
    </div>
  );
};

export default SignIn;
