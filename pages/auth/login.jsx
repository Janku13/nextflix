import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('mohamed@gmail.com');
  const [emailError, setEmailError] = useState();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (email) {
      if (email === 'mohamed@gmail.com') {
        setEmailError('');
        router.push('/');
      } else if (email !== 'mohamed@gmail.com') {
        setEmailError('Somthing went wrong try again later');
      }
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
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};
export default Login;
