import {
  Divider,
  Typography,
  ImageListItem,
  ImageList,
  Box,
} from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "/img/photoVillage/small-1.jpg",
    title: "ورودی روستا",
    cols: 2,
  },
  {
    img: "/img/photoVillage/big.jpg",
    title: "تابلو روستا",
    rows: 2,
    cols: 2,
  },
  {
    img: "/img/photoVillage/small-3.jpg",
    title: "زمین کشاورزی",
  },
  {
    img: "/img/photoVillage/small-2.jpg",
    title: "جاده روستا",
  },
];

export default function ListImg() {
  return (
    <Box mt={9}>
      <Divider className="divider-title-listimg" flexItem>
        <Typography
          variant="h6"
          component="h6"
          color="secondary.main"
          className="font-bold"
        >
          نمایی از روستا
        </Typography>
      </Divider>
      <ImageList variant="quilted" cols={4} rows={4} rowHeight={180}>
        {itemData.map((item) => (
          <ImageListItem
            className="listimg-container"
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              title={item.title}
              // component="img"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              className="w-100 img-border listimg-image"
            />
            <Box className="listimg-middle">
              <Typography
                color="white"
                component="h6"
                variant="h6"
                className="font-bold"
              >
                {item.title}
              </Typography>
            </Box>
            {/* </Box> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
