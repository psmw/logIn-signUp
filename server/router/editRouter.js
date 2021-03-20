const router = require('express').Router()
const EditUser = require('../models/edit-model')
const auth = require('../middleware/auth')

router.post('/', auth, async (req, res) => {
  try {
    const { firstName } = req.body

    const editUser = new EditUser({
      firstName
    })

    const saveEdit = await editUser.save()

    res.json(saveEdit)
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

module.exports = router
