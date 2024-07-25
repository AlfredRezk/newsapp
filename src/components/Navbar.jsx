import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user}  = useSelector(state=> state.auth)


  const handleLogout = ()=>{
    dispatch(logout())
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Clarusway News
          </Typography>

          {user?.email && user?.password &&(
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}

          {!user?.email&&(
            <Button color="inherit" onClick={()=> navigate('/login')}> Login</Button>
          )}


        </Toolbar>
      </AppBar>
    </Box>
  );
}
