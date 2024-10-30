import Login from "./Components/Login";
import Resetpassword from "./Components/Resetpassword";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/reset" element={<Resetpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
