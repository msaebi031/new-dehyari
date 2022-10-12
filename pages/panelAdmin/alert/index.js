import { Fragment } from "react";
import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";
import http from "../../../components/utils/httpServise";
import Login from "../../../components/Login";
import Alerts from "../../../components/PanelAdmin/Alert";

const Alert = ({ admin }) => {
  return (
    <Fragment>
      <Head>
        <title>خبر فوری | پنل مدیریت</title>
      </Head>
      <Alerts />
    </Fragment>
  );
};

export default Alert;
