import { Box, Container, Grid, Link } from "@mui/material";

const SocialMedia = () => {
  return (
    <Container maxWidth="md" id="Contact">
      <Box id="Contact-Us" mt={9}>
        <Grid
          display="flex"
          justifyContent="center"
          spacing={{ xs: 0, sm: 3 }}
          container
          textAlign="center"
        >
          <Grid item xs={12} sm={6}>
            <Link
              href="https://api.whatsapp.com/send?phone=+989138190806"
              target="_blank"
            >
              <Box
                width="100%"
                component="img"
                title="واتساپ"
                alt="WhatsApp"
                src="/img/socialmedia/whatsApp.png"
                className="cursor-pointer"
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="https://t.me/test/" target="_blank">
              <Box
                width="100%"
                component="img"
                alt="Telegram"
                title="تلگرام"
                src="/img/socialmedia/telegram.png"
                className="cursor-pointer"
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default SocialMedia;
