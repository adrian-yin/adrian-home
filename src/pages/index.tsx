import Layout from '@/containers/layout/layout';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <html lang="zh-cmn-Hans"></html>
        <title>Adrian Home</title>
      </Head>
      <Layout>This is main content</Layout>
    </>
  )
}

export default Home;