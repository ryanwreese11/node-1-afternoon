

const messages = []
let id = 0

module.exports = {

    create: (req, res) => {
        const { text, time } = req.body
        newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let index = null
        const { id } = req.params
        const { text, time } = req.body
        messages.forEach((message, i) => {
            if (message.id === id * 1) {
                index = i
            }
        })
        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].text,
            time: time || messages[index].time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        let index = null
        const { id } = req.params
        messages.forEach((message, i) => {
            if (message.id === id * 1) {
                index = i
            }
        })
        messages.splice(index, 1)
        res.status(200).send(messages)

    }


}