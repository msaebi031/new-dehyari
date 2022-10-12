import { Fragment } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Footer from "../Home/Footer";
import NavBar from "../Home/Navbar/Navbar";

const News = ({ post }) => {
  return (
    <Fragment>
      <NavBar />
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h5"
          className="font-bold typografy-news "
          color="secondary"
          pt={3}
        >
          {post.name}
        </Typography>
        <div
          className="box-news"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
        <Divider className="divider-news" />
        <Box display="flex" alignItems="center" mt={2}>
          <CalendarMonthOutlinedIcon color="gray" fontSize="medium" />
          <Typography
            color="gray.main"
            className="font-salamat"
            component="span"
            variant="h6"
          >
            {post.dateCreate}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};
export default News;
