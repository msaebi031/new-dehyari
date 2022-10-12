import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { DashboardSidebar } from "../Dashboard";
import { DashboardNavbar } from "../Dashboard/Navbar";

const LayoutPanel = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <Box className="bg-panel">
      <Box className="maxWitdh-panel">
        <Grid container>
          <Grid item xs={12} lg={3}>
            <DashboardSidebar
              open={open}
              handleOpenMenu={() => handleOpenMenu()}
            />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Container maxWidth="xl">
              <DashboardNavbar handleOpenMenu={() => handleOpenMenu()} />
              {children}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LayoutPanel;
