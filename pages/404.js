import Head from "next/head";
import { Fragment } from "react";
import NavBar from "../components/Home/Navbar/Navbar";
import NotFound from "../components/Notfound";

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>صفحه پیدا نشد! | حسین آباد کرون </title>
      </Head>
      <NavBar />
      <NotFound />
    </Fragment>
  );
}
