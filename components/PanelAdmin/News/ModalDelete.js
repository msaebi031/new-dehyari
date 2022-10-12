import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteNews } from "../../redux/news";
import http from "../../utils/httpServise";
import { successTost } from "../../utils/reactTostify";

const ModalDelete = ({ openModalDelete, handleOpenModalDelete, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    dispatch(deleteNews(id));
    const res = await http.post("/api/news/selectData", { id });
    await http.post("/api/news/delete", { id });
    await http.post("/delete", { name: res.data.data.name });
    successTost("با موفقیت حذف شد");
  };

  return (
    <Modal
      open={openModalDelete}
      onClose={() => handleOpenModalDelete()}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
        <Typography
          textAlign="center"
          mt={2.5}
          component="p"
          variant="body2"
          color="dark.light"
          pb={2}
        >
          آیا از دیلیت کردن خبر مطمئن هستید؟
        </Typography>
        <Box
          mb={3}
          textAlign="center"
          display={{ xs: "grid", sm: "flex" }}
          justifyContent="center"
        >
          <Button
            onClick={() => {
              handleDelete(id);
              handleOpenModalDelete();
            }}
            color="success"
            variant="contained"
            sx={{ ml: { xs: 0, sm: 2 }, color: "#fff" }}
          >
            بله
          </Button>
          <Button
            onClick={() => handleOpenModalDelete()}
            sx={{ mt: { xs: 1.6, sm: 0 } }}
            color="error"
            variant="contained"
          >
            خیر
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
