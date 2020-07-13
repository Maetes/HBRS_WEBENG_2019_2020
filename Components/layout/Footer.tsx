import styles from './Footer.module.css';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const socials = [
  {
    name: 'Facebook',
    pic: '/social/facebook.svg',
    link: 'https://www.facebook.com/profile.php?id=1805604591',
  },
  {
    name: 'LinkedIn',
    pic: '/social/linkedin.svg',
    link: 'https://www.linkedin.com/in/developermartin',
  },
  {
    name: 'GitHub',
    pic: '/social/github.svg',
    link: 'https://github.com/Maetes',
  },
  {
    name: 'Xing',
    pic: '/social/xing.svg',
    link: 'https://www.xing.com/profile/Martin_Mueller263',
  },
  {
    name: 'Mail',
    pic: '/social/mail.svg',
    link: 'mailto: martin.mueller.de@outlook.com',
  },
];

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSocial = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul>
          <li>
            <a onClick={scrollToTop}>Scroll Top</a>
          </li>
          <li>
            <Link href='/legal'>
              <a>Legal</a>
            </Link>
          </li>
          <li>
            <Link href='/auth'>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.middle}>
        <div style={{ textAlign: 'center' }}>
          ©2020 Created by Martin Mueller
        </div>
      </div>
      <div className={styles.right}>
        {socials.map((s, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${s.pic})` }}
            onClick={() => handleSocial(s.link)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
