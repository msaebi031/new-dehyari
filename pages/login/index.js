import Head from "next/head";
import { Fragment } from "react";
import Login from "../../components/Login";

const Logins = () => {
  return (
    <Fragment>
      <Head>
        <title>ورود به پنل مدیریت | حسین آباد کرون</title>
      </Head>
      <Login />
    </Fragment>
  );
};

export default Logins;
