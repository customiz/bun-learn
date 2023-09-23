const server = Bun.serve({
    port: 5000,
    fetch(req) {
        return new Response('Hello BUN API')
    }
})

console.log(`Listening on port ${server.port}`)