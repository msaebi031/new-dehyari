import { useState, useEffect, useRef } from "react";
import moment from "moment-jalaali";
// import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import { useDispatch } from "react-redux";
import { errorTost, successTost, warningTost } from "../../utils/reactTostify";

import { ReplayRounded, CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Input,
  Typography,
  FormControl,
} from "@mui/material";
import http from "../../utils/httpServise";
import { addOneNews, updateNews } from "../../redux/news";
import axios from "axios";

const ModalAddNews = ({ open, handleChangeModalAddNews, id, type }) => {
  //========= CkRditor ====== //
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      language: require("@ckeditor/ckeditor5-build-classic/build/translations/fa"),
    };
  }, []);
  //========= Moment ====== //
  moment.loadPersian({ dialect: "persian-modern" });
  //========= Redux ====== //
  const dispatch = useDispatch();
  //============ useSate ===========
  const [name, setName] = useState("");
  const [dic, setDic] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [dataEditor, setDataEditor] = useState([]);
  const [beforeName, setBeforeName] = useState("");
  const [datas, setDatas] = useState("");
  //============ handleSaveData ===========//
  const handleSaveData = async () => {
    if (name && dic && selectedImage && datas) {
      if (selectedImage !== "ok") {
        const Formdata = new FormData();
        Formdata.append("files", selectedImage);
        Formdata.append("name", name);
        await axios.post("/upload", Formdata);
      } else {
        await axios.post("/rename", {
          name: beforeName,
          newName: name,
        });
      }

      if (type === "create") {
        const insertNews = {
          name,
          p: dic,
          text: datas,
          dateCreate: moment().format("jDD jMMMM jYYYY"),
        };
        const res = await http.post("/api/news/addNews", insertNews);
        if (res.data.result) {
          successTost("با موفقیت اضافه شد");
          dispatch(addOneNews(res.data.data));
        } else {
          errorTost(res.data.error);
        }
      } else {
        const updateNew = {
          id,
          name,
          p: dic,
          text: datas,
        };
        dispatch(updateNews(updateNew));
        await http.post("/api/news/update", updateNew);
        successTost("با موفقیت ویرایش شد");
      }
      handleChangeModalAddNews();
    } else {
      warningTost("لطفا تمامی فیلد ها رو پر کنید.");
    }
  };

  //========= handleCleare ====== //
  const handleCleare = () => {
    setName("");
    setDic("");
    setSelectedImage("");
    setDataEditor("");
  };
  //========= handleGetData ====== //
  const handleGetData = async (id) => {
    const res = await http.post("/api/news/selectData", { id });
    const { name, p, text } = res.data.data;
    setName(name);
    setBeforeName(name);
    setDic(p);
    setDataEditor(text);
    setSelectedImage("ok");
  };
  //========= UseEfect Edit ====== //
  useEffect(() => {
    if (type === "create") {
      handleCleare();
    } else {
      handleGetData(id);
    }
  }, [open]);

  //========= Functon uploadAdapter ====== //
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            const dateFile = `${file.name}-${Date.now()}`;
            body.append("files", file);
            body.append("name", dateFile);
            axios
              .post("/upload", body)
              .then((res) => {
                resolve({
                  default: `/site/public/uploads/${res.data.name}.png`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  //========= Functon uploadPlugin ====== //
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <Modal
      open={open}
      onClose={() => handleChangeModalAddNews()}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Box
        className="style-modal scroll-height"
        sx={{ width: { xs: "80%", md: "40%" } }}
      >
        {/* Box Text Up Modal */}
        <Box display="flex" alignItems="center" pb={2}>
          <Typography component="p" className="font-bold" flexGrow="1">
            اضافه / ویرایش کردن خبر
          </Typography>
          <IconButton onClick={() => handleChangeModalAddNews()}>
            <CloseRounded color="error" />
          </IconButton>
        </Box>
        <Divider className="divider-bg" />
        {/* Box Text Up Modal */}

        {/* Box TextField Modal */}
        <Box pt={3}>
          {/* <FormControl fullWidth >  */}
          <Input
            placeholder="تیتر خبر"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="margin-input"
          />
          <Input
            placeholder="توضیحات کوتاه خبر"
            fullWidth
            value={dic}
            onChange={(e) => setDic(e.target.value)}
            className="margin-input"
          />
          <Button
            sx={{ mb: 3 }}
            variant="contained"
            component="label"
            fullWidth
            color={selectedImage ? "gray" : "secondary"}
            className="img-input-news"
            startIcon={selectedImage ? <ReplayRounded sx={{ pl: 1 }} /> : null}
          >
            {selectedImage ? "ویرایش تصویر اضافه شده" : " آپلود تصویر خبر"}

            <input
              type="file"
              name="uploaded_file"
              aria-describedby="uploaded_file"
              hidden
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
            />
          </Button>
          {/* </FormControl> */}
        </Box>
        {/* Box TextField Modal */}

        {/* CKeditor */}
        <CKEditor
          editor={ClassicEditor}
          data={dataEditor}
          config={{
            extraPlugins: [uploadPlugin],
            language: "fa",
          }}
          onChange={(event, editor) => {
            setDatas(editor.getData());
          }}
        />
        {/*Button Handle Modal */}
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          mt={3}
        >
          <Button
            sx={{ color: "light.main", ml: 3 }}
            color="success"
            variant="contained"
            type="submit"
            onClick={() => {
              handleSaveData();
            }}
          >
            ثبت کردن
          </Button>
          <Button
            sx={{ color: "light.main" }}
            color="error"
            variant="contained"
            onClick={() => {
              handleChangeModalAddNews();
            }}
          >
            انصراف
          </Button>
          {/*Button Handle Modal */}
        </Box>
        {/* Box TextField Modal */}
      </Box>
    </Modal>
  );
};

export default ModalAddNews;
