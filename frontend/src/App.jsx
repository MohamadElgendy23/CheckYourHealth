import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Health from "./pages/Health";
import User from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
