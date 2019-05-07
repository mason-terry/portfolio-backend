const router = require('express').Router()
const { AdminController } = require('../../controllers')

router
  .route('/')
  .get(AdminController.getAdmins)
  .post(AdminController.addAdmin)

module.exports = router
