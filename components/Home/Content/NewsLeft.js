import { CalendarMonth } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Link from "next/link";
const NewsLeft = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        if (index !== 0) {
          let names = item.name.replace(/\s+/g, "-");
          return (
            <Link href={`news/${names}`} key={index}>
              <Card
                sx={{ mb: 2.3 }}
                className="d-flex blog-card cursor-pointer"
              >
                <CardMedia
                  title={item.name}
                  sx={{ height: { md: "9.6rem", sm: "10.1rem", xs: "143px" } }}
                  component="img"
                  className="blog-img"
                  image={`/site/public/uploads/${item.name}.png`}
                  alt={item.name}
                />
                <Box className="w-100">
                  <CardContent>
                    <Typography
                      textOverflow="ellipsis"
                      overflow="hidden"
                      width={{ xs: "152px", sm: "229px" }}
                      // height="1.2em"
                      whiteSpace="nowrap"
                      className="font-bold"
                      variant="body1"
                      component="h2"
                      color="secondary.main"
                      noWrap
                    >
                      {item.name}
                    </Typography>
                    <Box className="text-overflow">
                      <Typography
                        component="p"
                        className="lines-left"
                        dangerouslySetInnerHTML={{
                          __html: item.p,
                        }}
                      />
                    </Box>
                    <Divider
                      sx={{ my: { xs: "9.6px", sm: 2, md: 1.6, lg: 1.5 } }}
                    />
                    <Box
                      mb="-9px"
                      color="dark.dateColor"
                      display="flex"
                      alignItems="center"
                    >
                      <CalendarMonth fontSize="small" />
                      <Typography
                        pr={1.5}
                        // mb="-4px"
                        variant="history"
                        className="font-salamat"
                        component="p"
                      >
                        {item.dateCreate}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Link>
          );
        }
      })}
    </>
  );
};
export default NewsLeft;
