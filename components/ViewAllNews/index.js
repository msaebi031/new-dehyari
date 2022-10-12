import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import NavBar from "../Home/Navbar/Navbar";
import { useRouter } from "next/router";

export default function ViewAllNews() {
  const { data, count, page } = useSelector((state) => state.allNews);
  const newCount = Math.ceil(count / 10);

  const router = useRouter();

  const handleChange = (e) => {
    router.push(`/allnews/${e}`);
  };
  return (
    <Fragment>
      <NavBar />
      <Container maxWidth="xl">
        <Grid mt={2} container spacing={{ xs: 0, sm: 3 }} rowSpacing={3}>
          {data.map((card, index) => {
            let names = card.name.replaceAll(/\s+/g, "-");
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Card className="blog-card">
                  <CardMedia
                    sx={{ height: { xs: "258px", sm: "198px", md: "180px" } }}
                    component="img"
                    image={`/site/public/uploads/${card.name}.png`}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      textOverflow="ellipsis"
                      overflow="hidden"
                      width={{ sm: "229px" }}
                      // height="1.2em"
                      whiteSpace="nowrap"
                      className="font-bold"
                      gutterBottom
                      variant="body1"
                      component="h2"
                    >
                      {card.name}
                    </Typography>
                    <Box className="text-overflow">
                      <Typography
                        component="p"
                        className="lines-left"
                        dangerouslySetInnerHTML={{
                          __html: card.p,
                        }}
                      />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Link href={`/news/${names}`}>
                      <Button color="secondary" size="small">
                        مشاهده خبر
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {/* Pagination */}
        <Box
          justifyContent="center"
          display={count === 0 ? "none" : "flex"}
          py={4}
        >
          <Pagination
            className="product-Pagination"
            page={page}
            count={newCount}
            color="secondary"
            onChange={(event, value) => {
              handleChange(value);
            }}
          />
        </Box>
        {/* Pagination */}
      </Container>
    </Fragment>
  );
}
