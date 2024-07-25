import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNews, getNews } from "../store/newsSlice";
import loadingGif from "../assets/loading.gif";
import newsDefaultImg from "../assets/default-news.jpg";

export default function Home() {
  const dispatch = useDispatch();
  const { news, error, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
    // clean up
    return () => {
      dispatch(clearNews());
    };
  }, [dispatch]);

  // Loading
  if (loading) {
    return (
      <Box sx={{ height: "200px"}} textAlign="center">
        <img src={loadingGif} style={{ height: "100%" }} alt="loading"/>
      </Box>
    );
  }

  // Error
  if (error) {
    return (
      <Typography color="error" variant="h2" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h1" align="center">
        {" "}
        NEWS
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {news.map((item) => (
          <Card
            key={item.publishedAt}
            sx={{ maxWidth: 345, m: 5, maxHeight: 600 }}
          >
            <CardMedia
            component="img"
            height="250px"
            alt="img"
              src={item?.urlToImage ? item?.urlToImage : newsDefaultImg}
            />
            <CardContent >
              <Typography gutterBottom  variant="h5" component="div" align="center">{item?.title}</Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">{item?.content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small"> Share</Button>
              <Button size="small" href={item?.url} target="_blank">More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
