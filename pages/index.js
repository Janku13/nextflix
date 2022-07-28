import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import SectionCards from '../components/card/SectionCards';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const largeVideos = [
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'large',
    },
  ];
  const mediumVideos = [
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'medium',
    },
  ];
  const smallVideos = [
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
    {
      imgUrl: '/static/heroImg.webp',
      size: 'small',
    },
  ];
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
      <div className={styles.sectionWrapper}>
        <SectionCards title="large" listOfCards={largeVideos} />
        <SectionCards title="medium" listOfCards={mediumVideos} />
        <SectionCards title="Small" listOfCards={smallVideos} />
      </div>
    </div>
  );
}
