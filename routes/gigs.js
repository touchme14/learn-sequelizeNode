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
        id : '3',
        name : 'Thuy Van',
        age : '22',
        country : 'Vietnam',
        city : 'Ben Tre'
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
        .catch(err => consloe.log(err))
})

// Database
/*const list = dbtest.define('list', {
    id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    }
}

);
*/
module.exports = router;