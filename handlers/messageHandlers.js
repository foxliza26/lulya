const {nanoid} = require ('nanoid')

const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync ('db/messeges.json')

const db = low(adapter)

db.defaults({
    messages: [
        {
            messageId: '1', 
            userId: '1',
            senderName: 'Олежка', 
            messageText: 'Попробуль люль - настанет июль',
            createdAt: '2007-07-07',
            avatar: 'https://tlgrm.ru/_/stickers/96b/f1e/96bf1eca-a75d-3b7c-b620-bb5f2cdac89f/4.jpg'
          

        },

       { 
        messageId: '2', 
        userId: '2',
        senderName: 'Иришка', 
        messageText: 'Попровала - настал',
        createdAt: '2007-07-07',
        avatar:'https://famous-scientists.ru/photo/i6555.jpg'
        

        }
    ]
}).write()


module.exports = (io, socket) =>  {
    
    const getMessages = () => {
        const messages = db.get('messages').value ()
        io.emit('messages', messages)
    }

    const addMessage = (message) => {
        db.get ('messages')
        .push ({
            messageId: nanoid (8),
            createdAt: new Data (),
            ... message

        }
        )
    .write()
    getMessages()

    }
    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)

}