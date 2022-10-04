import "./Home.scss";
import profileImage from "../../assets/png/profileImage.png"
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
                src={auth.currentUser.photoURL ? auth.currentUser.photoURL : profileImage}
                alt="profile"
                className="userImage"
              />
            </figure>
            <div>
              <p className="userName">Welcome</p>
              <p className="userName">{auth.currentUser.displayName}</p>
            </div>
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
