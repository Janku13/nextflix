import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { magic } from '../../services/magic-auth';
import styles from '../../styles/Login.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (email) {
      setEmailError('');
      try {
        setIsLoading(true);
        const didToken = await magic.auth.loginWithMagicLink({
          email: email,
        });
        if (didToken) {
          router.push('/');
        }
        console.log({ didToken });
      } catch (e) {
        setIsLoading(false);
        setEmailError('Somthing went wrong try again later');
        console.log(e);
      }
    } else if (email && email !== 'mohamed@gmail.com') {
      setEmailError('Somthing went wrong try again later');
    } else {
      setEmailError('Not a valid e-mail');
    }
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="logo netflix"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            onChange={handleEmailInput}
            value={email}
            type="email"
            placeholder="Email address"
            className={styles.emailInput}
          />
          {emailError && <p className={styles.userMsg}>{emailError}</p>}
          <button onClick={handleSubmitLogin} className={styles.loginBtn}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  );
};
export default Login;
