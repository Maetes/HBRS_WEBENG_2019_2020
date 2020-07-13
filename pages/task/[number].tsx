import Body from '../../Components/layout/Body';
import { useRouter } from 'next/router';
import styles from './Task.module.css';
import { useState, useEffect } from 'react';
import { useStateValue } from '../../context/store';
import { initializeApollo } from '../../hooks/useApollo';
const ReactMarkdown = require('react-markdown');
import CodeBlock from './CodeBlock';

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
          source={'``` ' + '\n' + data.data.getTask.code + '\n' + ' ```'}
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
  console.log('request: ', request);
  const apolloClient = initializeApollo(request);

  const data = await apolloClient.query({
    query: GetTaskDocument,
    variables: {
      name: params.number,
    },
  });

  console.log(data);

  return { props: { data } };
}

export default Task;
