import Router from 'next/router';
import { fancyLoadingBar } from './FancyLoadingBar';
import styles from './Header.module.css';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useEffect, useRef } from 'react';
import { useStateValue } from '../../context/store';
import { removeCookie, getCookie } from '../../util/frontend/cookieHandler';
import { useGetUserQuery } from '../../util/frontend/apollo/documents.graphql';
import { useRouter } from 'next/router';
import Nav from './Nav';

fancyLoadingBar(Router);

const Header: React.FC = () => {
  const [{ navState, userState }, dispatch] = useStateValue();
  const { data, loading, error } = useGetUserQuery();
  const router = useRouter();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (!userState.email) {
      if (getCookie('user', null)) {
        if (!error) {
          dispatch({ type: 'SET_USER', payload: data?.getUser });
        }
      }
    }
  }, [data]);

  const logout = () => {
    removeCookie('user', () => null);
    dispatch({ type: 'REMOVE_USER', payload: null });
  };

  const toggleNav = () => {
    dispatch({ type: 'TOGGLE', payload: !navState.show });
  };

  return (
    <div className={styles.nav}>
      <div className={styles.martin}>
        <Link href='/'>
          <a className={(styles.active, styles.bold)} onClick={scrollToTop}>
            <span className={styles.lambda}>🚀</span> Martin Mueller
          </a>
        </Link>
      </div>
      {!userState.title && router.pathname !== '/auth' && (
        <>
          <div
            className={
              navState.show ? styles.switch : styles.hamburgerContainer
            }
            onClick={toggleNav}
          >
            <div className={styles.stripe1}></div>
            <div className={styles.stripe2}></div>
            <div className={styles.stripe3}></div>
          </div>
          {navState.show && <Nav />}

          <div className={styles.bigNav}>
            <div className={styles.link}>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                isDynamic={true}
                activeClass={styles.active}
              >
                .about
              </ScrollLink>
            </div>
            <div className={styles.link}>
              <ScrollLink
                to='tech'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                isDynamic={true}
                activeClass={styles.active}
              >
                .technology
              </ScrollLink>
            </div>
            <div className={styles.link}>
              <ScrollLink
                to='proj'
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
                isDynamic={true}
                activeClass={styles.active}
              >
                .projects
              </ScrollLink>
            </div>
          </div>
        </>
      )}
      {userState.title !== '' && (
        <div className={styles.loggedIn}>
          <div className={styles.item}>
            {userState.title} {' ' + userState.nachname}
          </div>
          <div className={styles.item}>
            <Link href='/taskList'>
              <a className={(styles.active, styles.bold)}>Tasklist</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href='/'>
              <a className={(styles.active, styles.bold)} onClick={logout}>
                Logout
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
