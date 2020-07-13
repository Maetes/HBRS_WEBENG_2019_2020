import styles from './Nav.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useStateValue } from '../../context/store';
import Link from 'next/link';

const Nav = () => {
  const [{ navState }, dispatch] = useStateValue();

  const toggle = () => {
    dispatch({ type: 'TOGGLE', payload: !navState.show });
  };

  return (
    <div className={navState.show ? styles.nav : styles.show}>
      <ScrollLink
        activeClass={styles.active}
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        isDynamic={true}
        className={styles.link}
        onClick={toggle}
      >
        <div>About</div>
      </ScrollLink>
      <ScrollLink
        activeClass={styles.active}
        to='tech'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
        className={styles.link}
        onClick={toggle}
      >
        <div>Technology</div>
      </ScrollLink>
      <ScrollLink
        activeClass={styles.active}
        to='proj'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
        className={styles.link}
        onClick={toggle}
      >
        <div>Projects</div>
      </ScrollLink>
    </div>
  );
};

export default Nav;
