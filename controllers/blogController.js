const { BlogModel } = require('../models')

module.exports = {
  getAllBlogs: async (req, res) => {
    const Blogs = await BlogModel.find({}).sort({ _id: -1 })
    res.send(Blogs)
  },
  addBlog: async (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const createdOn = new Date()

    const newBlogPost = await new BlogModel({
      title,
      body,
      createdOn
    })

    newBlogPost.save(error => {
      if (error) throw error
      res.send({
        success: true,
        message: 'Blog saved successfully!'
      })
    })
  },
  updateBlog: async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const body = req.body.body
    const editedOn = new Date()

    await BlogModel.findByIdAndUpdate(id, { title, body, editedOn })
    res.send({ success: true, message: 'Blog updated successfully!' })
  },
  getBlog: async (req, res) => {
    console.log(req.params)
    const id = req.params.id
    const SingleBlog = await BlogModel.findById(id)
    res.send(SingleBlog)
  }
}
