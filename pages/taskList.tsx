import Body from '../Components/layout/Body';
import TileCollection from '../Components/TileCollection/TileCollection.component';
import { useEffect } from 'react';
import { useStateValue } from '../context/store';
import { useRouter } from 'next/router';

import {
  useAllTasksQuery,
  AllTasksDocument,
} from '../util/frontend/apollo/documents.graphql';

const TaskList = () => {
  const router = useRouter();
  const { data, loading, error } = useAllTasksQuery();
  const [{ taskState, userState }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: 'INSERT_TASKLIST',
      payload: data?.allTasks,
    });
  }, [data]);

  useEffect(() => {
    if (error) {
      router.push('/auth');
    }
  }, [error]);

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <Body>
        <TileCollection
          tiles={data!.allTasks}
          primeHeader={'Alle erledigten Aufgaben aus Webengineering'}
          subHeader={'zur Bewertung'}
          title={true}
          body={true}
          // staticBG={'/icons/code.svg'}
        />
      </Body>
    );
  } else {
    return <div>none</div>;
  }
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: AllTasksDocument,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }

export default TaskList;
