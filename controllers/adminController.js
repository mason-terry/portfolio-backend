const { Admin } = require('../models')

module.exports = {
  getAdmins: async (req, res) => {
    const admins = await Admin.find({})
    res.send(admins)
  },
  addAdmin: async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const newAdmin = await new Admin({
      name,
      email,
      password
    })

    newAdmin.save(error => {
      if (error) throw error
      res.send({
        success: true,
        message: 'Admin saved successfully!'
      })
    })
  }
}
