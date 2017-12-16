const { ObjectID } = require('mongodb')

const Users = require('../models/userModel')

const users = [
  {
    _id:   new ObjectID(),
    email: 'john@email.com',
    name:  'John Doe'
  },
  {
    _id:   new ObjectID(),
    email: 'jane@emial.com',
    name:  'Jane Doe'
  }
]

const populateUsers = (done) => {
  console.log('POPULATED USERS')
  Users
    .remove({})
    .then(() => {
      const addUsers = []

      users.forEach(user => {
        addUsers.push(new Users(user).save())
      })

      return Promise.all(addUsers)
    })
}

module.exports = {
  users,
  populateUsers
}