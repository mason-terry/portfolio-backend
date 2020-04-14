const router = require('express').Router()
const { BlogController } = require('../../controllers')

router
  .route('/')
  .get(BlogController.getAllBlogs)
  .post(BlogController.addBlog)

router
  .route('/:id')
  .get(BlogController.getBlog)
  .put(BlogController.updateBlog)

module.exports = router
