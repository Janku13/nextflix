import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="moham@gmail.com" />
      <Banner
        title="Naruto Shippuden Ultimate Ninja"
        subTitle="O ninja mais forte"
        imgUrl="/static/heroImg.webp"
      />
      {/* <Card /> */}
    </div>
  );
}
