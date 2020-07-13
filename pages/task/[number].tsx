import Body from '../../Components/layout/Body';
import { useRouter } from 'next/router';
import styles from './Task.module.css';
import { initializeApollo } from '../../hooks/useApollo';
const ReactMarkdown = require('react-markdown');

import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {
  AllTaskIdsDocument,
  GetTaskDocument,
} from '../../util/frontend/apollo/documents.graphql';

interface TaskType {
  data: {
    data: {
      getTask: {
        name: string;
        beschreibung: string;
        code: string;
        click: string;
        __typename: string;
      };
    };
  };
  loading: boolean;
  networkStatus: number;
  stale: boolean;
}

const Task = ({ data }: TaskType) => {
  const router = useRouter();
  const { number } = router.query;

  return (
    <Body>
      <div className={styles.container}>
        <h1>Lösung von Aufgabe Nummer {number}</h1>
        <p>Number: {number}</p>
        <ReactMarkdown
          className={styles.markDown}
          source={'``` ' + data.data.getTask.code + ' ```'}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Body>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: AllTaskIdsDocument,
  });

  const paths = data.data.allTaskIds.map((task: any) => ({
    params: { number: task.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, request }: any) {
  const apolloClient = initializeApollo(request);

  const data = await apolloClient.query({
    query: GetTaskDocument,
    variables: {
      name: params.number,
    },
  });

  return { props: { data } };
}

//Class Codeblocks 1:1 übernommen aus https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093

class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value }: any = this.props;

    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
  }
}

export default Task;
