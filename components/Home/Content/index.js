import { Box, Grid } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";
import { selectData } from "../../redux/newsHome";

const Content = () => {
  const selectDatas = useSelector(selectData);

  return (
    <Fragment>
      <Box marginTop={7} id="news">
        <Grid
          rowSpacing={{ xs: 3, md: 0 }}
          container
          spacing={{ xs: 0, md: 3 }}
        >
          <Grid item md={6} xs={12}>
            <NewsRight data={selectDatas[0]} />
          </Grid>
          <Grid item md={6} xs={12}>
            <NewsLeft data={selectDatas} />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default Content;
