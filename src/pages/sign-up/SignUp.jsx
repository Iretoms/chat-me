import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { toast } from "react-toastify";
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
  const [errorMessage, setErrorMessage] = useState("");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,10}$/)) {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
        });

        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formDataCopy);

        navigate("/");
      } catch (error) {
        toast.error("Something went wrong, try again");
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
        <h1 className="page-heading">Create an Account</h1>
      </header>
      <main className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-control name">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>
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
          <div className="form-control password">
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
