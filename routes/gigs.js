const express = require('express');
const router = express.Router();
const dbtest = require('../config/database');
const list = require('../models/list');

//get  list
router.get('/', (req, res) =>
    list.findAll()
   .then(gigs => 
   {console.log(gigs);
    res.sendStatus(200);
   }
   )
   .catch(err => console.log(err))
)
//Add a gig 
router.get('/add', (req, res) => {
    const data = {
        id : '1',
        name : 'cheater',
        age : '221',
        country : 'Indonesia',
        city : 'Pekalongan'
    }

    let {id, name, age, country, city} = data;


//insert into table
list.create({
        id,
        name,
        age,
        country,
        city

    })
        .then(list => res.redirect('/gigs'))
        .catch(err => console.log(err))
})


module.exports = router;
