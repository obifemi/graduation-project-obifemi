var express = require('express')
var router = express.Router()
const Challenge = require('../challenge')

const User = require('../user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list.map(user => user.name))
})
router.get('/:userId', function (req, res, next) {
  const user = User.list.find(user => user.name === req.params.userId)
  if (!user) {
    res.status(404).send('User not found')
    return
  }
  res.send(user)
})
//Creation of Mert and Elif
router.post('/', function (req, res, next) {
  const user = User.create(req.body.name, req.body.level)
  res.send(user)
})

//Create a challenge for a user
router.post('/:userId/challenges', function (req, res, next) {
  const user = User.list.find(user => user.name === req.params.userId)
  const challenge = user.createChallenge(req.body.level, req.body.challengesName)
  res.send(challenge)
})

//join a challlenge
router.post('/:userId/challenges/:challengeId/attendees', function (req, res, next) {
  const challenge = Challenge.list.find(challenge => challenge.challengesName === req.params.challengeId)
  const user = User.list.find(user => user.name === req.body.userId)
  // console.log(Challenge.list)
  if (!challenge) {
    res.status(404).send('Challenge not found')
    return
  }
  user.joinChallenge(challenge)
  res.send(challenge)
})

module.exports = router