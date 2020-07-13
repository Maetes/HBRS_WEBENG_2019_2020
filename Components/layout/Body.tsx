import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

import styles from './Body.module.css';
const Body = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Martin Mueller</title>
      </Head>
      <div className={styles.global}>
        <Header />
        <div className={styles.behaviour}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;
