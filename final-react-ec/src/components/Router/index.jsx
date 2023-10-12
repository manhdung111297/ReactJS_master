import { Routes, Route } from "react-router-dom";
import Home from "./../Home/index";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Login/RegisterPage";
import PostVideo from "../Body/PostVideo";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/share" element={<PostVideo />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
