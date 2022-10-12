import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Switch,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../utils/httpServise";
import { successTost } from "../../utils/reactTostify";
import LayoutPanel from "../Layout";

export default function Alerts() {
  const [power, setPower] = useState(false);
  const [p, setP] = useState("");

  const handleChange = (event) => {
    setPower(event.target.checked);
    http.post("/api/alert/update", { p, power: event.target.checked });
  };

  const handleSaveData = async () => {
    await http.post("/api/alert/update", { p, power });
    successTost("با موفقیت ذخیره شد");
  };

  const handleGetData = async () => {
    const res = await http.post("/api/alert/select");
    const { p, power } = res.data.data;
    setPower(power);
    setP(p);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <LayoutPanel>
      <Box py={2}>
        <Card className="card-boxShodow-panelAdmin min-height-panelAdmin ">
          {/* CardContent */}
          <CardContent>
            <Box
              pt={2}
              pb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                className="font-bold"
                component="span"
                variant="h6"
                px={{ xs: 0, sm: 1 }}
              >
                خبر های فوری
              </Typography>

              <FormGroup>
                <FormControlLabel
                  sx={{
                    textAlign: "center",
                    ml: 0,
                  }}
                  control={
                    <Switch
                      checked={power}
                      onChange={handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={power ? "فعال" : "غیر فعال"}
                />
              </FormGroup>
            </Box>
            {power ? (
              <Box textAlign="center">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  maxRows={4}
                  placeholder="متن خبر فوری را وارد کنید"
                  value={p}
                  onChange={(e) => setP(e.target.value)}
                />
                <Button
                  onClick={() => handleSaveData()}
                  color="success"
                  variant="contained"
                  sx={{ color: "#fff", mt: 3 }}
                >
                  ثبت خبر فوری
                </Button>
              </Box>
            ) : (
              ""
            )}
          </CardContent>
        </Card>
      </Box>
    </LayoutPanel>
  );
}
