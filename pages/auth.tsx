import Body from '../Components/layout/Body';
import SignIn from '../Components/SignIn/SignIn.component';
import styles from './auth.module.css';

const Auth = () => {
  return (
    <Body>
      <>
        <div className={styles.signInAndSignUp}>
          <SignIn />
        </div>
        ;
      </>
    </Body>
  );
};

export default Auth;
