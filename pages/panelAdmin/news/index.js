import { Fragment } from "react";
import Head from "next/head";
import News from "../../../components/PanelAdmin/News";

const New = () => {
  return (
    <Fragment>
      <Head>
        <title>اضافه کردن خبر | پنل مدیریت</title>
      </Head>
      <News />
    </Fragment>
  );
};

export default New;
