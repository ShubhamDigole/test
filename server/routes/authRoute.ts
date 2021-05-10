

let expre = require('express');
const User = require('../models/users')


const router = expre.Router();

router.post('/api/signup', (req, res) => {

    const today = new Date();
    const userVals = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      post: req.body.post,
      date: today,
      isAdmin: req.body.isAdmin
  
    }
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) {
     
            User.create(userVals)
              .then(user => {
                res.json({ status: 'User Created Successfully'})
  
              })
              .catch(err => {
                res.json('error: ' + err)
  
              })
  
          
        }
  
        else {
  
          res.json({ error: 'user already exist' })
        }
  
      })
  
  
  
  })

  