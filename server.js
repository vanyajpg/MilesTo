const express = require('express')
const app = express()
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require("body-parser")
const MongoStore = require('connect-mongo')(session)
const methodOverride = require("method-override");
const flash = require('express-flash')
const logger = require("morgan");
const mainRoutes = require('./routes/main');
const postRoutes = require("./routes/posts");



require('dotenv').config()


require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session()) 

//flash alerts if something goes wrong with sign ups
app.use(flash())

//directing request to designated route
app.use('/', mainRoutes)
app.use('/post', postRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   