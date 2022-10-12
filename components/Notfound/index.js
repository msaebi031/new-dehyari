import { Box, Button, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box mt={4} textAlign="center" mb={2}>
      <Box
        component="img"
        src={"/img/404.svg"}
        alt="404"
        width={{ xs: "80%", sm: "50%", md: "30%" }}
      />
      <Typography
        color="dark.light"
        component="h5"
        variant="body1"
        py={{ xs: 1.5, sm: 3 }}
      >
        صفحه ای با این آدرس وجود ندارد.
      </Typography>
      <Button
        sx={{ mt: { xs: 1.6, sm: 0 } }}
        color="secondary"
        variant="contained"
        href="/"
      >
        صفحه اصلی
      </Button>
    </Box>
  );
};

export default NotFound;
