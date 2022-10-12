import { ErrorOutline, Notifications } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import http from "../../utils/httpServise";

export default function BreakingNews() {
  const [power, setPower] = useState(false);
  const [data, setData] = useState("");

  const handleGetdata = async () => {
    const res = await http.post("/api/alert/select");
    const { p, power } = res.data.data;
    setPower(power);
    setData(p);
  };

  useEffect(() => {
    handleGetdata();
  }, []);

  return (
    <Fragment>
      {power ? (
        <Box py={4} mt={6} bgcolor="rgba(229, 246, 253, 0.8)">
          <Container maxWidth="lg">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ErrorOutline color="primaryIcon" fontSize="large" />
              <Box width="100%" pr={2.5}>
                <Typography
                  className="font-bold"
                  variant="body1"
                  component="h6"
                >
                  خبر های فوری
                </Typography>
                <Typography
                  color="dark.pColor"
                  mt={1}
                  variant="body2"
                  component="p"
                >
                  {data}
                </Typography>
              </Box>
              <Notifications
                className="icon-breakingnews"
                color="secondaryIcon"
                fontSize="large"
              />
            </Box>
          </Container>
        </Box>
      ) : (
        ""
      )}
    </Fragment>
  );
}
