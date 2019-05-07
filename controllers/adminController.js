const { AdminModel } = require('../models')

module.exports = {
  getAdmins: async (req, res) => {
    const admins = await AdminModel.find({})
    res.send(admins)
  },
  addAdmin: async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const newAdmin = await new AdminModel({
      name,
      email,
      password
    })

    newAdmin.save(error => {
      if (error) throw error
      res.send({
        success: true,
        message: 'AdminModel saved successfully!'
      })
    })
  }
}
