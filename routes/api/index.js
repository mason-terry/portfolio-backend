const router = require('express').Router()
const adminRoutes = require('./adminRoutes')
const blogRoutes = require('./blogRoutes')
const messageRoutes = require('./messageRoutes')

router.use('/admin', adminRoutes)

router.use('/blog', blogRoutes)

router.use('/message', messageRoutes)

module.exports = router
