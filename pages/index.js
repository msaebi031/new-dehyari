import { Container } from "@mui/material";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import BreakingNews from "../components/Home/BreakingNews";
import Footer from "../components/Home/Footer";
import ListImg from "../components/Home/ListImg";
import NavBar from "../components/Home/Navbar/Navbar";
import SocialMedia from "../components/Home/SocialMedia";
import { wrapper } from "../components/redux/store/configureStore";
import { setData } from "../components/redux/newsHome";
import { server } from "../components/utils/config";
import Content from "../components/Home/Content";
import http from "../components/utils/httpServise";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>حسین آباد کرون</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="سایت حسین آباد کرون یک سایت خبری جهت اطلاع اخبار روستای حسین آباد است که اخباری روزمره و مهم روستا حسین آباد را به اشتراک می گذارد"
        />
        <meta
          name="keywords"
          content="حسین آباد , حسین آباد کرون , روستای حسین آباد"
        />
        <meta property="og:title" content="حسین آباد کرون" />
        <meta property="og:url" content="https://hosseinAbad-cn.ir" />
        <meta property="og:site_name" value="حسین آباد کرون" />
        <meta name="author" content="Target Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <BreakingNews />
      <Container>
        <Content />
        <ListImg />
        <SocialMedia />
      </Container>
      <Footer />
    </Fragment>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const res = (await http.post(`${server}/api/news/selectNewsHome`)).data
      .data;
    store.dispatch(setData(res));
  }
);

export default Home;
