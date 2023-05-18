import Layout from '@/containers/layout/layout';
import Head from 'next/head';
import Hero from '@/components/hero/hero';
import { HOME_TITLE } from '@/configs/info';

function Home() {
  return (
    <>
      <Head>
        <html lang="zh-cmn-Hans"></html>
        <title>Adrian Home</title>
      </Head>
      <Layout>
        <Hero text={HOME_TITLE} />
      </Layout>
    </>
  );
}

export default Home;