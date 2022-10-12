import Head from "next/head";
import { Fragment } from "react";
import News from "../../components/News";
import { server } from "../../components/utils/config";
import http from "../../components/utils/httpServise";

const New = ({ post }) => {
  const title = `${post.name} | حسین آباد کرون`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.p} />
      </Head>
      <News post={post} />
    </Fragment>
  );
};
export const getServerSideProps = async (context) => {
  const postName = context.params.name;
  const name = postName.replaceAll("-", " ");
  const post = (
    await http.post(`${server}/api/news/select`, {
      name,
    })
  ).data.data;

  return {
    props: {
      post,
    },
  };
};

export default New;
