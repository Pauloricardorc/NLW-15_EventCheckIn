import fastify from 'fastify'

const app = fastify()

//  

app.get('/', () => {
  return 'HELLO server runing'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server runing')
})