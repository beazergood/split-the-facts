import { ApolloClient, InMemoryCache } from '@apollo/client'
const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

const client = new ApolloClient({
  uri: NEXT_PUBLIC_STRAPI_API_URL + '/graphql',
  cache: new InMemoryCache()
})

export default client
