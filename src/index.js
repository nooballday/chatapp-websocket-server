const ws = require('./websocket')

/**
 * Web socket instance
 */
const WEB_SOCKET_PORT = 3001
const wsIo = ws().instance

/**
 * catch connection(s)
 */
wsIo.on('connection', (socket) => {
    console.log(`${socket.id} is joining the room!`)
    socket.on('chat', function (data) {
        const payload = JSON.parse(data)
        console.log(`${payload.user_id} is sending ${payload.message}`)
        socket.broadcast.emit('chat', payload)
    })
    /**
    * listen disconnect(s)
    */
    socket.on('disconnecting', (reason) => {
        console.log(`${socket.id} just disconnect reason : ${reason}`)
    })
})

/**
 * run the socket
 */
console.info(`Running web socket on port ${WEB_SOCKET_PORT}`)
wsIo.listen(WEB_SOCKET_PORT)