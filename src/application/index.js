import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const apolloServer = new ApolloServer({ typeDefs, resolvers })

apolloServer.listen().then(({ url }) => console.log(`🔥 started server at ${url} 🔥`))