import styles from './SignIn.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateValue } from '../../context/store';
import CustomButton from '../formelements/CustomButton/CustomButton.component';
import FormInput from '../formelements/formInput/FormInput.component';
import SnackBar from '../formelements/snackBar/SnackBar.component';
import {
  useSignInMutation,
  SignInDocument,
} from '../../util/frontend/apollo/documents.graphql';
import { setCookie } from '../../util/frontend/cookieHandler';

const SignIn = () => {
  const [{ userState }, dispatch] = useStateValue();
  const router = useRouter();
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    name: '',
    message: '',
  });

  useEffect(() => {
    if (userState.email) {
      router.push('/taskList');
    }
  }, [userState]);

  const { email, password, error } = values;

  const [signInMutation, { data, loading }] = useSignInMutation({
    variables: {
      email: email,
      password: password,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '' });
    try {
      const { data } = await signInMutation();
      if (data?.signIn.message !== null) {
        setValues({
          ...values,
          error: data?.signIn.message as string,
          loading: false,
        });
      } else {
        setValues({ ...values, loading: false });
        setCookie('user', data!.signIn.token, () => {
          router.push('/taskList');
        });
        await dispatch({
          type: 'SET_USER',
          payload: data.signIn.user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, error: '', [name]: e.target.value });
  };

  return (
    <>
      {error && (
        <SnackBar
          type='alert'
          status={error ? true : false}
          message={error}
          timeout={3000}
        />
      )}
      <div className={styles.signIn}>
        <h2>Task presentation and Audit</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            handleChange={handleChange('email')}
            label='email'
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange('password')}
            label='password'
            required
          />
          <div className={styles.buttons}>
            <CustomButton type='submit' value='Submit'>
              SIGN IN
            </CustomButton>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default SignIn;
