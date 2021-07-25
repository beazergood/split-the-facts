import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.NEXT_PUBLIC_STRAPI_API_URL,
  cache: new InMemoryCache()
})

export default client
