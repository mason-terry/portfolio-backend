const { MessageModel } = require('../models')

module.exports = {
  getMessages: async (req, res) => {
    const messages = await MessageModel.find({}).sort({ _id: -1 })
    res.send(messages)
  },
  addMessage: async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const sentOn = new Date()

    const newMessage = new MessageModel({
      name,
      email,
      message,
      sentOn
    })

    newMessage.save(error => {
      if (error) throw error
      res.send({
        success: true,
        message: 'Message saved successfully!'
      })
    })
  }
}
