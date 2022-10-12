import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={3} textAlign="center" bgcolor="secondary.main">
      <Typography variant="body1" component="p" color="white" p={2}>
        &copy;کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.
      </Typography>
      <Typography pb={1} variant="body2" component="p" color="white">
        طراحی شده با 🧡 توسط{" "}
        <Link
          href="https://Target-Designer.com/"
          color="#6FE45B"
          variant="subtitle1"
          className="link-footer"
        >
          تارگت دیزاینر
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
