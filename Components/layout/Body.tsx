import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import Nav from './Nav';

import styles from './Body.module.css';
const Body = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Martin Mueller</title>
      </Head>
      <div className={styles.global}>
        <Header />
        <Nav />
        <div className={styles.behaviour}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;
