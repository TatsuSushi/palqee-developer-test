import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>This is the home page</p>
      </section>
    </Layout>
  );
};

export default Home;
