import { CalendarMonth } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";

const NewsRight = ({ data }) => {
  const names = data.name.replace(/\s+/g, "-");

  return (
    <Link href={`news/${names}`}>
      <Box
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.09)"
        className="cursor-pointer"
      >
        <Box
          title={data.name}
          width="100%"
          height={{ xs: "16rem", sm: "360px", md: "20.1rem" }}
          component="img"
          src={`/site/public/uploads/${data.name}.png`}
          alt={data.name}
        />
        <Box p={2.2} mt="-8px">
          <Typography
            textOverflow="ellipsis"
            overflow="hidden"
            width={{ xs: "100%", md: "382px", lg: "100%" }}
            whiteSpace="nowrap"
            variant="body1"
            component="h2"
            color="secondary.main"
            pb={1}
            className="font-bold"
          >
            {data.name}
          </Typography>
          <Box className="text-overflow">
            <Typography
              component="p"
              className="lines-left"
              dangerouslySetInnerHTML={{
                __html: data.p,
              }}
            />
          </Box>
          <Divider sx={{ my: 2.5 }} />
          <Box color="dark.dateColor" display="flex" alignItems="center">
            <CalendarMonth fontSize="small" />
            <Typography
              variant="history"
              className="font-salamat"
              pr={1.5}
              mb="-5px"
              component="p"
            >
              {data.dateCreate}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
export default NewsRight;
