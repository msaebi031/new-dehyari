import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Avatar,
  Pagination,
  Button,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNews, selectNews } from "../../redux/news";
import http from "../../utils/httpServise";

import ModalAddNews from "./ModalAddNews";
import ModalDelete from "./ModalDelete";

const Content = () => {
  //========= Redux ====== //
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const [id, setId] = useState(null);
  const [type, setType] = useState("create");
  //========= ModalAddnews ====== //
  const [openModalAddNews, setOpenModalAddNews] = useState(false);
  const handleChangeModalAddNews = (id = null) => {
    setOpenModalAddNews(!openModalAddNews);
    if (id) {
      setId(id);
      setType("edit");
    } else {
      setType("create");
    }
  };
  //========= ModalDelete ====== //
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = (id) => {
    setOpenModalDelete(!openModalDelete);
    setId(id);
  };
  //========= Pagination ====== //
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const handleGetPage = async (page) => {
    const res = await http.post("/api/news/selectOfPage", {
      offset: (page - 1) * 10,
      limit: 10,
    });
    // console.log(res.data.data);
    const newCount = Math.ceil(res.data.count / 10);
    setCount(newCount);
    dispatch(addNews(res.data.data));
  };

  useEffect(() => {
    handleGetPage(page);
  }, [page]);

  return (
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
              خبر ها
            </Typography>

            <Button
              onClick={() => handleChangeModalAddNews()}
              color="secondary"
              variant="contained"
              sx={{ ml: { xs: 0, sm: 2 }, color: "#fff" }}
            >
              اضافه کردن خبر
            </Button>
          </Box>
        </CardContent>
        {/* CardContent */}
        {/* TableContainer and Show News */}
        {news.length === 0 ? (
          <>
            <Divider />
            <Typography
              className="font-bold"
              color="dark"
              variant="body1"
              component="p"
              pt={2}
              pr={2}
            >
              خبری جهت نمایش وجود ندارد!
            </Typography>
          </>
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold">نام خبر</TableCell>
                  <TableCell className="font-bold">تصویر</TableCell>
                  <TableCell className="font-bold">توضیحات</TableCell>
                  <TableCell className="font-bold"></TableCell>
                  <TableCell className="font-bold text-center">
                    عملیات
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {news.map((order, index) => (
                  <TableRow hover key={index}>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>
                      <Avatar
                        title={order.name}
                        alt={order.name}
                        src={`/site/public/uploads/${order.name}.png`}
                        className="avatar-dashboard"
                        variant="rounded"
                      />
                    </TableCell>
                    <TableCell>{order.p}</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-center">
                      <Tooltip
                        enterDelay={300}
                        arrow
                        title={
                          <Typography
                            className="font-bold"
                            component="span"
                            variant="caption"
                          >
                            ویرایش
                          </Typography>
                        }
                      >
                        <IconButton
                          onClick={() => {
                            handleChangeModalAddNews(order.id);
                          }}
                        >
                          <EditOutlined color="success" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        enterDelay={300}
                        arrow
                        title={
                          <Typography
                            className="font-bold"
                            component="span"
                            variant="caption"
                          >
                            حذف
                          </Typography>
                        }
                      >
                        <IconButton
                          onClick={() => {
                            handleOpenModalDelete(order.id);
                          }}
                        >
                          <DeleteOutlineOutlined color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {/* TableContainer and Show News */}
        {/* Pagination */}
        <Box
          justifyContent="center"
          py={2}
          display={news.length === 0 ? "none" : "flex"}
        >
          <Pagination
            className="product-Pagination"
            count={count}
            color="secondary"
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </Box>
        {/* Pagination */}
      </Card>

      {/* Modal Add / Edit New */}
      <ModalAddNews
        open={openModalAddNews}
        handleChangeModalAddNews={handleChangeModalAddNews}
        id={id}
        type={type}
      />
      {/* Modal Add / Edit New */}

      {/* Modal Delete */}
      <ModalDelete
        openModalDelete={openModalDelete}
        handleOpenModalDelete={() => handleOpenModalDelete()}
        id={id}
      />
      {/* Modal Delete */}
    </Box>
  );
};

export default Content;
