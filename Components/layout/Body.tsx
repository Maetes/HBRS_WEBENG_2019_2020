import Header from './Header';
import Footer from './Footer';

import styles from './Body.module.css';
const Body = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.global}>
      <Header />
      <div className={styles.behaviour}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Body;
