import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(props) {
  const router = useRouter();
  const { username } = props;
  const [showLoggout, setShowLoggout] = useState(false);
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };
  const handleOnClickList = (e) => {
    e.preventDefault();
    router.push('/browse/my-list');
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>Nextflix</div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={() => setShowLoggout((prev) => !prev)}
            >
              <p className={styles.username}>{username}</p>
            </button>

            {showLoggout && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName} onClick>
                      Sign out
                    </a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
