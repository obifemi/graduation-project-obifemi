const User = require('./user')

console.log('SimLang is a an app in which people can learn German')

const Mert = new User('Mert', 'B2')
const Ali = new User('Ali', 'B2')
const AlisChallenge = Ali.createChallenge('B2', 'AlisChallenge')

Mert.joinChallenge(AlisChallenge)

// console.log(Mert)
// console.log('end of Mert user')

console.log(
  Ali.challenges[0].attendees.forEach(element => {
    console.log(element.name)
  })
)

// console.log(Mert)
// console.log(Ali)

// console.log(Mert)
// console.log(MertsChallenge)

// Ali.joinChallenge(MertsChallenge)

// console.log(MertsChallenge)

// const Mert = {
//   name: 'Mert',
//   level: 'B2',
//   points: [],
//   challenges: [],
//   joinChallenge(challenge) {
//     this.challenges.push(challenge)
//     challenge.attendees.push(this)
//   },
// }

// const Ali = {
//   name: 'Ali',
//   level: 'B2',
//   challenges: [],
//   joinChallenge(challenge) {
//     this.challenges.push(challenge)
//     challenge.attendees.push(this)
//   },
// }

//  {
//   name: "Mert's Challenge",
//   level: 'B2',
//   attendees: [Mert],
//   questions: [],
//   answers: [],
//   scoreOwner: [],
//   scoreOpponent: [],
//   date: '20 - 03 - 2023',
// }

// const AliChallenge = {
//   name: "Ali's Challenge",
//   level: 'B2',
//   attendees: [Ali],
//   questions: [],
//   answers: [],
//   scoreOwner: [],
//   scoreOpponent: [],
//   date: '20 - 03 - 2023',
// }

// console.log(`Mert has a name of ${Mert.name} and has ${Mert.challenges.length} challenge.`)
// console.log(`Ali has a name of ${Ali.name} and has ${Ali.challenges.length} challenge.`)

// Ali.joinChallenge(MertsChallenge)

// console.log(
//   `Mert's challenge is called ${MertsChallenge.name} and is at level ${MertsChallenge.level} has ${
//     MertsChallenge.attendees.length
//   } attendees. Attendees are ${MertsChallenge.attendees.map(attendee => attendee.name)}`
// )

// console.log(`Mert has a name of ${Mert.name} and has ${Mert.challenges.length} challenge.`)
// console.log(`Ali has a name of ${Ali.name} and has ${Ali.challenges.length} challenge.`)

// console.log(`Ali has joined Mert's Challenge at ${Ali.challenges[0].level} level on ${Ali.challenges[0].date}.`)

// class Challenge {
//   score1 = []
//   score2 = []
//   winner = []
//   users = []
//   constructor(type, level, users) {
//     this.level = level
//     this.type = type
//     this.users = users
//   }
// }

// class User {
//   words = []
//   questions = []

//   constructor(name) {
//     this.name = name
//     this.level = level
//   }

//   createChallenge(type, location, date) {
//     const picnic = new Picnic(name, location, date)

//     this.joinPicnic(picnic)

//     return picnic
//   }

//   joinPicnic(picnic) {
//     picnic.attendees.push(this)
//     this.picnics.push(picnic)
//   }

//   bringItem(name, quantity, picnic) {
//     let item = picnic.items.find(item => item.name === name)

//     if (!item) {
//       item = new Item(name, quantity)
//       picnic.items.push(item)
//     }

//     item.whoIsBringingWhat.push({
//       user: this,
//       quantity: quantity,
//     })
//   }

//   leavePicnic(picnic) {
//     picnic.attendees = picnic.attendees.filter(attendee => attendee !== this)
//     this.picnics = this.picnics.filter(p => p !== picnic)

//     picnic.items.forEach(item => {
//       item.whoIsBringingWhat = item.whoIsBringingWhat.filter(whoIsBringingWhat => whoIsBringingWhat.user !== this)
//     })
//   }
// }

//MVP
// I need to make an app which will be based on german language challanges (questions)
// The app will have a list of questions(10) and answers(10) during the.
// The app will be multiplayer. Which means that users will be able to play against each other.
// If one of the user answers the question correctly, he will get a point.
// If both users answer the question (in the challenges) correctly, the app will give a point to the faster one.
// I need two main objects, Users and Challanges. Users should be able to create a Challange and one other user should be able to join the Challange.
// The user need to be able to choose the German level, create a Challange, and join a Challenge
// The user need to be able to get a list of all Challanges in the same level.
// Users should also be able to delete a challenge they created.
// Users should also be able to delete their account.
// Users should also be able to edit their account information.
//End of MVP

// Users should be able to save the questions from the challenge they want to learn later.
// Users should be able to see the questions they have saved.
// Users should be able to delete the questions they have saved.
// Users should be able to save words from the challangs they want to learn by clicking on them.
