import Head from 'next/head';
import Banner from '../components/banner/Banner';
import SectionCards from '../components/card/SectionCards';
import Navbar from '../components/nav/Navbar';
import { getCommunVideos, getPopularVideos } from '../services/video';
import styles from '../styles/Home.module.css';

export const getServerSideProps = async (ctx) => {
  const disney = await getCommunVideos('Disney Plus trailer');
  const crunchyroll = await getCommunVideos('crunchyroll trailer');
  const netflix = await getCommunVideos('netflix trailer');
  const hbo = await getCommunVideos('HBO trailer');
  const popular = await getPopularVideos();

  return {
    props: {
      disney,
      crunchyroll,
      netflix,
      hbo,
      popular,
    },
  };
};

export default function Home({ disney, crunchyroll, netflix, hbo, popular }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar username="moham@gmail.com" />
        <Banner
          title="Naruto Shippuden Ultimate Ninja"
          subTitle="O ninja mais forte"
          imgUrl="/static/heroImg.webp"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="Netflix Series"
            size="small"
            listOfCards={netflix}
          />
          <SectionCards title="Disney" size="small" listOfCards={disney} />
          <SectionCards
            title="Crunchyroll"
            size="small"
            listOfCards={crunchyroll}
          />
          <SectionCards title="Popular" size="small" listOfCards={popular} />
          <SectionCards title="HBO" size="small" listOfCards={hbo} />
        </div>
      </div>
    </div>
  );
}
