var express = require('express')
var router = express.Router()
const Challenge = require('../challenge')
const User = require('../user')

//Creation of Mert and Elif
router.post('/', async function (req, res, next) {
  const user = await User.create({ name: req.body.name, level: req.body.level })
  res.send(user)
})

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  res.send(users)
  //GET user based on id
})
router.get('/:userId', async function (req, res, next) {
  const user = await User.findById(req.params.userId)
  if (!user) {
    res.status(404).send('User not found')
    return
  }
  res.send(user)
})

//Create a challenge for a user
router.post('/:userId/challenges', async function (req, res, next) {
  const user = await User.findById(req.params.userId)
  const challenge = await user.createChallenge(req.body.level, req.body.challengesName)
  res.send(challenge)
})

//join a challlenge //ask question about this
router.post('/:userId/challenges/:challengeId/attendees', async function (req, res, next) {
  const challenge = await Challenge.findById(req.params.challengeId)

  const user = await User.findById(req.body.userId)
  // console.log(Challenge.list)
  if (!challenge) {
    res.status(404).send('Challenge not found')
    return
  }

  await user.joinChallenge(challenge)
  res.send(challenge)
  // console.log(user)
})

module.exports = router