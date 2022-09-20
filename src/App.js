import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn"
import ForgotPassword from "./pages/forgot-password/ForgotPassword";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
