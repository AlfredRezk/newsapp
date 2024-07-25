import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box component="footer" p={2} bgcolor="secondary.main">
      <Typography variant="body1" color="white" align="center">
        Copy &copy;{" "}
        <Link
          to="https://www.clarusway.com"
          style={{ color: "white", marginLeft: "5px", marginRight: "5px" }}
        >
          {" "}
          Clarusway
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
