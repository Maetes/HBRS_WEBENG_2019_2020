import Body from '../Components/layout/Body';
import { initializeApollo } from '../hooks/useApollo';
import About from '../Components/About/About.component';
import TileCollection from '../Components/TileCollection/TileCollection.component';
import Opener from '../Components/Opener/Opener.component';
import {
  useAllPublicDataQuery,
  AllPublicDataDocument,
} from '../util/frontend/apollo/documents.graphql';

const IndexPage = () => {
  let { data } = useAllPublicDataQuery();

  return (
    <Body>
      <>
        <Opener />
        <About id='about' />
        <TileCollection
          tiles={data!.allTechs}
          primeHeader={'Technologies'}
          subHeader={'I use popular state of the art technologies'}
          id={'tech'}
        />
        <TileCollection
          tiles={data!.allProjects}
          primeHeader={'Projects'}
          subHeader={'Some of my (online) projects'}
          external={true}
          id={'proj'}
        />
      </>
    </Body>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPublicDataDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default IndexPage;
