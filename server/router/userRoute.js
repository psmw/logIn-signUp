const router = require('express').Router()
const User = require('../models/user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// sign up

router.post('/', async (req, res) => {
  try {
    const {
      email,
      password,
      passwordVerification,
      firstName,
      surName,
      cpf,
      pis,
      country,
      state,
      city,
      cep,
      streetName,
      number,
      complement
    } = req.body

    // validacao

    if (!email ||
      !password ||
      !passwordVerification ||
      !firstName ||
      !surName ||
      !cpf ||
      !pis ||
      !country ||
      !state ||
      !city ||
      !cep ||
      !streetName ||
      !number) {
      return res.status(400).json({
        errorMessage: 'campo inválido'
      })
    }

    if (password !== passwordVerification) {
      return res.status(400).json({
        errorMessage: 'use a mesma senha em ambos os campos'
      })
    }

    const userConfirmation = await User.findOne({ email: email })
    if (userConfirmation) {
      return res.status(400).json({
        errorMessage: 'esse e-mail já foi cadastrado'
      })
    }

    // criptografar a senha

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // salvar o usuario

    const newUser = new User({
      email,
      passwordHash,
      firstName,
      surName,
      cpf,
      pis,
      country,
      state,
      city,
      cep,
      streetName,
      number,
      complement
    })

    const savedUser = await newUser.save()

    // gerar o token

    const token = jwt.sign({
      user: savedUser._id
    }, process.env.JWT_SECRET)

    // mandar o token

    res.cookie('token', token, { httpOnly: true }).send()
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

// log in

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // validacao email

    if (!email || !password) {
      return res.status(400).json({
        errorMessage: 'preencha todos os campos'
      })
    }

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(401).json({ errorMessage: 'usuario ou senha incorretos' })
    }

    const correctPassword = await bcrypt.compare(password, existingUser.passwordHash)
    if (!correctPassword) {
      return res.status(401).json({ errorMessage: 'usuario ou senha incorretos' })
    }

    // gerar o token

    const token = jwt.sign({
      user: existingUser._id
    }, process.env.JWT_SECRET)

    // mandar o token

    res.cookie('token', token, { httpOnly: true }).send()
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

// log out

router.get('/logout', (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  }).send()
})

// usuario logado

router.get('/loggedIn', (req, res) => {
  try {
    const token = req.cookies.token

    if (!token) return res.json(false)

    jwt.verify(token, process.env.JWT_SECRET)

    res.send(true)
  } catch (err) {
    res.json(false)
  }
})

module.exports = router
