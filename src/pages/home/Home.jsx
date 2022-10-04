import "./Home.scss";
import { useState } from "react";
import profileImage from "../../assets/png/profileImage.png";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Home = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="homeHeader">
        <nav className="homeNav">
          <div className="userInfo">
            <figure className="userImageContainer">
              <img
                src={
                  auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : profileImage
                }
                alt="profile"
                className="userImage"
              />
            </figure>
            <div>
              <p className="userName">Welcome,</p>
              <p className="userName">{auth.currentUser.displayName}</p>
            </div>
          </div>
          <button className="logOutBtn" onClick={onLogOut}>
            Log out
          </button>
        </nav>
      </header>
      <main>
        <div className="chatContainer">

        </div>
      </main>
      <footer className="homeFooter">
        <div className="inputContainer">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="messageInput"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="logOutBtn">
              Send
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Home;
