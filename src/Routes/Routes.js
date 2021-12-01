import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Team from "../Pages/Team"

function MyRoutes() {
    return (
      <div >
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path ="Team" element={<Team /> } />
        </Routes>
      </div>
    );
  }


  export default  MyRoutes;