import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from '../components/banner/Banner';
import SectionCards from '../components/card/SectionCards';
import Navbar from '../components/nav/Navbar';
import { magic } from '../services/magic-auth';
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
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUsername() {
      try {
        console.log({ a: 'email' });
        const { email } = await magic.user.getMetadata();
        console.log({ email });
        if (email) {
          console.log(email);
          setUser(email);
        } else {
          // router.push('/auth/login');
        }
      } catch (error) {
        console.log('Error retrieving email:', error);
        // router.push('/auth/login');
      }
    }
    getUsername();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar username={user} />
        <Banner
          videoId="gxc6y2ZVfCU"
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
