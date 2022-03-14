import Layout, { siteTitle } from "../../components/layout/layout";
import Head from "next/head";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { FC } from "react";
import Table from "../../components/table/table";
import RandomQuotes from "../../components/random-quotes/randomQuotes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:58405",
  cache: new InMemoryCache(),
});

const id = 1;

const PERSON = gql(`
    query getPerson{
        person(personID: ${id}){
            name
            hairColor
            skinColor
            eyeColor
            gender
            homeworld{
                name
            }
        }
    }
    
`);

const Characters = () => {
  const { loading, error, data } = useQuery(PERSON);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("Character data: ", data);

  return (
    <Table
      title={"Name"}
      title2={"Hair Color"}
      title3={"Skin Color"}
      title4={"Eye Color"}
      title5={"Gender"}
      title6={"Home World Name"}
      characterLink={"./character-details"}
      name={data.person.name}
      hairColor={data.person.hairColor}
      skinColor={data.person.skinColor}
      eyeColor={data.person.eyeColor}
      gender={data.person.gender}
      homeWorld={data.person.homeworld.name}
    />
  );
};

const CharacterList:FC = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <Breadcrumb />
          <section>
            <RandomQuotes />
          </section>
          <Characters />
        </div>
      </Layout>
    </ApolloProvider>
  );
};

export default CharacterList;