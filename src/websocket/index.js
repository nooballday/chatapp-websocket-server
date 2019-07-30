const io = require('socket.io')
const socketio = io()

module.exports = () => {
    return {
        instance : socketio 
    }
}