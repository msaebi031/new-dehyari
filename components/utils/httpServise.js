import axios from "axios";

axios.defaults.baseURL = process.env.LOCALHOST_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    // console.log(error);
    // toast.error("Error Server!", {
    //     position: "top-right",
    //     closeOnClick: true
    // });
  }

  return Promise.reject(error);
});

const sendPost = (url, data = {}, headers = {}) => {
  var body = { ...data, token: "YvAbguq8tdjdmyNwYWmdtBocPxKFpQr4" };
  return axios.post(url, body, { headers });
};

export default {
  get: axios.get,
  post: sendPost,
  put: axios.put,
  delete: axios.delete,
};
