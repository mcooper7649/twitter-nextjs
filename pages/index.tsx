import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { fetchTweets } from '../utils/fetchTweets';

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twiter 2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        {/* Sidebar */}
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>{' '}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {},
  };
};
