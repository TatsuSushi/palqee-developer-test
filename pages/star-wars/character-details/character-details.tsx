import Layout, { siteTitle } from "../../../components/layout/layout";
import Head from "next/head";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { FC } from "react";
import styles from "./character-details.module.css";
import RandomQuotes from "../../../components/random-quotes/randomQuotes";

const client = new ApolloClient({
  uri: "http://localhost:58405",
  cache: new InMemoryCache(),
});

const PERSON = gql(`
    query getPerson{
         person(personID: 1){
            name
            filmConnection{
              films {
                title
                episodeID
                director
                producers
                releaseDate
              }
            }
        }
    }
`);

const Person = () => {
  const { loading, error, data } = useQuery(PERSON);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const films = data.person.filmConnection.films;
  //console.log("films: " , films);
  return (
    <div>
      <section>
        <RandomQuotes />
      </section>
      <section>
        <h2>{data.person.name}</h2>
        <h3>Appeared in films:</h3>
      </section>
      <section>
        {films.map(({ title, episodeID, director, producers, releaseDate }) => (
          <div className={styles.card} key={episodeID}>
            <div className={styles.container}>
              <h4>{title}</h4>
              <p>Episode: {episodeID}</p>
              <p>Director: {director}</p>
              <p>Producers: {producers}</p>
              <p>Release Date: {releaseDate}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};


const CharacterDetails: FC = (props) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <section>
            <Breadcrumb />
          </section>
          <section>
            <Person />
          </section>
        </div>
      </Layout>
    </ApolloProvider>
  );
};

export default CharacterDetails;