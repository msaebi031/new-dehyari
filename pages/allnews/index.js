import Head from "next/head";
import { Fragment } from "react";
import { addAllNews, setCount, setPage } from "../../components/redux/allNews";
import { wrapper } from "../../components/redux/store/configureStore";
import { server } from "../../components/utils/config";
import http from "../../components/utils/httpServise";
import ViewAllNews from "../../components/ViewAllNews";
import Custom404 from "../404";

const index = ({ result }) => {
  return result !== false ? (
    <Fragment>
      <Head>
        <title>مشاهده همه خبر ها | حسین آباد کرون</title>
        <meta name="description" content="تمامی اخبار روستای حسین آباد کرون" />
        <meta
          name="keywords"
          content="اخبار روستای حسین آباد , اخباری روستای حسین آباد کرون"
        />
      </Head>
      <ViewAllNews />
    </Fragment>
  ) : (
    <Custom404 />
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const offset = (query.page - 1) * 12;
    const count = await http.post(`${server}/api/news/count`);
    if (offset < count.data.count) {
      const res = await http.post(`${server}/api/news/selectOfPage`, {
        offset,
        limit: 12,
      });
      store.dispatch(addAllNews(res.data.data));
      store.dispatch(setCount(count.data.count));
      store.dispatch(setPage(parseInt(query.page)));
    } else {
      return {
        props: {
          result: false,
        },
      };
    }
  }
);

export default index;
