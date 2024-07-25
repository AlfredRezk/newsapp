import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import PrivateRouter from "./components/PrivateRouter";

export default function App() {
  return (
    <Box sx={{display:'flex' , flexDirection:'column', height:'100vh'}}>
      <Navbar />
      <Box flexGrow={1}>
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRouter/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
      </Box>
     
      <Footer/>
    </Box>
  );
}
