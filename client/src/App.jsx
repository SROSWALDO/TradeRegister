import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Tables from "./components/Tables/Tables";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
// import User from "./components/Users/User";
import { AuthProvider } from "./components/Login/Autenticate";
import ProtectedRoute from "./components/Login/protecRoutes";
import Logout from "./components/Login/Logout";
import User from "./components/Users/User";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/registers" element={<ProtectedRoute element={<Tables />} />} />
          <Route path="/users" element={<ProtectedRoute element={<User />} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
