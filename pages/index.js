import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import SectionCards from '../components/card/SectionCards';
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
      <SectionCards
        title="large"
        listOfCards={[
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
          <Card imgUrl="/static/heroImg.webp" size="large" />,
        ]}
      />
      <SectionCards
        title="medium"
        listOfCards={[
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
          <Card imgUrl="/static/heroImg.webp" size="medium" />,
        ]}
      />
      <SectionCards
        title="Small"
        listOfCards={[
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
          <Card imgUrl="/static/heroImg.webp" size="small" />,
        ]}
      />
    </div>
  );
}
