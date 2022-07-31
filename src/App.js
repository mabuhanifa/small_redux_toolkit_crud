import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<User />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
