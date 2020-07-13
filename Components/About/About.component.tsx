import styles from './About.module.css';

const About = ({ id }: { id: string }) => {
  return (
    <>
      <div className={styles.container} id={id}>
        <h1>Fullstack Developer</h1>
        <p>...with a passion for client wishes</p>
        <ul>
          <li>I am from Germany.</li>
          <li>I have the ability to learn very quickly.</li>
          <li>I give 100% for any client project</li>
          <li>
            I work with clients, designers, developers and anyoneelse involved
            in the project
          </li>
          <li>I bring in much experience in business</li>
        </ul>
      </div>
    </>
  );
};

export default About;
