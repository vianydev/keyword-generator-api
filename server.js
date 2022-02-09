const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const knex = require('knex');
const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host : '127.0.0.1',
        user : 'vianey',
        password : '',
        database : 'keyword-generator'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send("it is working"))});
app.post('/signin', (req, res) => signin.handleSignIn( req, res, db, bcrypt ));
app.post('/register', (req, res) => register.handleRegister( req, res, db, bcrypt ));
app.get('/profile/:id', (req, res) => profile.handleProfile(req, res));
app.post('/imageUrl', (req, res) => image.handleApiCall(req, res));
    
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})

