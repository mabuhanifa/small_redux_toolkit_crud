import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
