import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div className="main-container">
      <header className="signIn-heading">
        <h1 className="page-heading">Forgot Password</h1>
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
          <button type="submit" className="submit-btn">
            Send reset link
          </button>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
