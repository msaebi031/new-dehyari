import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const DashboardNavbar = (props) => {
  const { handleOpenMenu } = props;

  return (
    <Box pt={2} display={{ xs: "block", lg: "none" }}>
      <Card className="card-budget">
        <CardContent className="padding-input-navbar-dashboard">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                alt="پروفایل"
                src={"/img/news/small-1.png"}
                className="avatar-dashboard"
              />
              <Typography
                color="dark.main"
                variant="subtitle2"
                pr={2}
                className="font-bold"
              >
                رضا صائبی
              </Typography>
            </Box>

            <Box>
              <IconButton onClick={() => handleOpenMenu()}>
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
