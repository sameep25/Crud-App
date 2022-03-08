import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import Notfound from "./Components/Notfound";
import EditUser from "./Components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
