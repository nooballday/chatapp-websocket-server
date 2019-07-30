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
    socket.on('join', function (room) {
        socket.to(room).emit('message', `${socket.id.substr(0, 4)} joined the room`)
        console.log(socket.id)
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