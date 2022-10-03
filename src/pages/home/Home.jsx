import { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  return (
    <>
      <header className="homeHeader">
        <nav className="homeNav">
          <div className="userInfo">
            <figure className="userImageContainer">
              <img
                src={auth.currentUser.photoURL ? auth.currentUser.photoURL : ""}
                alt="profile"
                className="userImage"
              />
            </figure>
            <p className="userName">Welcome {auth.currentUser.displayName}</p>
          </div>
          <button className="logOutBtn" onClick={onLogOut}>
            Log out
          </button>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Home;
