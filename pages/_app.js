import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../services/magic-auth';
import '../styles/globals.css';
import Loading from '../components/loading/Loading';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const handleComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  useEffect(() => {
    async function checkIsLoggedIn() {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/auth/login');
      }
    }
    checkIsLoggedIn();
  }, []);
  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
