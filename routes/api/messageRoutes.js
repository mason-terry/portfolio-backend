const router = require('express').Router()
const { MessageController } = require('../../controllers')

router
  .route('/')
  .get(MessageController.getMessages)
  .post(MessageController.addMessage)

module.exports = router
