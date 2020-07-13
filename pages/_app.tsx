import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../hooks/useApollo';
import { AppProps } from 'next/app';
import './global.style.css';
import { StateProvider } from '../context/store';
import { rootInitialState, rootReducer } from '../context/rootReducer';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/nprogress/nprogress.css';

config.autoAddCss = true;

library.add(faBars, faUser);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <StateProvider initialState={rootInitialState()} reducer={rootReducer}>
        <Component {...pageProps} />
      </StateProvider>
    </ApolloProvider>
  );
};

export default MyApp;
