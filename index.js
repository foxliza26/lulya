

//Создаем ХТТП-сервер
const server = require ('http').createServer ()

//подключаемся к серверу сокет

const io = require('socket.io') (server, {
    cors: {
        origin: '*'  
    }
})
const log = console.log

const registermessageHandlers = require ('./handlers/messageHandlers')
const registeruserHandlers = require ('./handlers/userHandlers')



//обработчик события
//функция выполняется при подключении сервера

const onConnection = (socket) => {
//выводим сообщение о подключении пользователя
    log('User connected')

    registermessageHandlers(io,socket)
    registeruserHandlers(io,socket)

    socket.on('disconnect',() => {
        log('user disconnected')
    })
}


//обрабатывает подключение
io.on ('connection', onConnection)

//запуск сервера
const PORT = process.env.PORT||5000
server.listen(PORT,()=> {
log(`server ready connect. Port:${PORT}`)

})

