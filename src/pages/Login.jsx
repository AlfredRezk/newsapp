import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    // dispatch login action 
    dispatch(login({email, password}))

    // clear inputs 
    setEmail("");
    setPassword('');
    // navigate to home page 
    navigate('/')

  }
  return (
    <Container component="main" maxWidth="xs" >
      <Box
        // mt={8}
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
        sx={{
          mt:-30,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">Sign In</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1, width:'100%'}}>
          <TextField
          required
          fullWidth
          label="Email Address"
          margin="normal"
          id="email"
          name="email"
          autoFocus
          autoComplete="off"
          value={email}
          onChange = {(e)=> setEmail(e.target.value)}

          />
          <TextField
          required
          fullWidth
          label="Password"
          margin="normal"
          id="email"
          name="email"
          type="password"
          autoFocus
          autoComplete="off"
          value={password}
          onChange = {(e)=> setPassword(e.target.value)}
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{mt:3, mb:2}}
          >
            Sign In
          </Button>

        </Box>
      </Box>


    </Container>
  );
}
