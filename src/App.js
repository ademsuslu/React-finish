import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Contacts from "./Pages/Contacts";
import Users from "./Pages/Users";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Linked from "./Pages/Linked";
import Login from "./Pages/Login";
import Comment from "./Pages/Comment";
import NormalComment from "./Pages/NormalComment";
import Detay from "./Pages/Detay";
import Comments from "./Pages/Comments";
import { AppProvider } from "./Context";
function App() {
  const [user, setUser] = useState({});
  return (
    <AppProvider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Linked/:id" element={<Linked />} />
          <Route path="/Detay/:id" element={<Detay />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/NormalComment" element={<NormalComment />} />
          <Route path="/Comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

const Home = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <h1 className="text-center mt-5">Welcome to Weboost</h1>
        </div>
      </div>
    </div>
  );
};
