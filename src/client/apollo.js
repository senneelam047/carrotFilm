import {ApolloClient, InMemoryCache} from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index', // SWAPI GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;