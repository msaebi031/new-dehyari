import axios from "axios";
import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import { ToastContainer } from "react-toastify";
import { wrapper } from "../components/redux/store/configureStore";

import "react-toastify/dist/ReactToastify.css";
import "../public/css/main.css";

// Axios Config :
axios.defaults.baseURL = process.env.LOCALHOST_URL;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        rtl
        theme="light"
        toastClassName="style-toast font-light"
        autoClose={3000}
      />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
