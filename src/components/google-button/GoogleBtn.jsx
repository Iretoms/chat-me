import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

const GoogleBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if user doesnt exists, create
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          timeStamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  };

  return (
    <button className="submit-btn" onClick={onClick}>
      <FaGoogle /> {location.pathname === "/sign-up" ? "Sign Up" : "Sign In"}{" "}
      with Google
    </button>
  );
};

export default GoogleBtn;
