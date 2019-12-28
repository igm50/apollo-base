const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crishton'
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then((config: { url: string }) => {
  console.log(`🚀 Server ready at ${config.url}`)
})
