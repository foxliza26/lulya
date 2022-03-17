const { Socket } = require('socket.io')

//Создаем ХТТП-сервер
const server = require ('http').createServer ()

//подключаемся к серверу сокет

const io = require('socket.io') (server, {
    cors: {
        origin: '*'  
    }
})
const log = console.log

//обработчик события
//функция выполняется при подключении сервера

const onConnection = (Socket) => {
}

//обрабатывает подключение
io.on ('connection', onConnection)

//запуск сервера
const PORT = process.env.PORT||5000
server.listen(PORT,()=> {
log(`server ready connect. Port:${PORT}`)

})

