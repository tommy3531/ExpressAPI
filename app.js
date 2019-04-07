const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const expressValidation = require('express-validator');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require('express-flash');
const cors = require('cors');

const userRoutes = require('./routes/user');
const publicRoutes = require('./routes/public');


/**
 * Create express server
 */
const app = express();

/**
 * Load environment variable
 */
dotenv.config({ path: '.env'});

/**
 * Connect to MongoDB
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB)
    .then(() => 
        console.log('MongoDB Connected')
    )
    .catch(err => 
        console.log(err)
    );
// mongoose.connection.on('error', (err) => {
//     console.error(err);
//     console.log("MongoDB connection error. Make sure Mongo is running");
//     process.exit();
// });

/**
 * Express Configuration
 **/
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(expressValidation());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, //two weeks in mill
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        authReconnect: true,
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use((error, req, res, next) => {
    console.log("This is and error: " + error);
    console.log("This is the res: " + res);
    console.log("This is the req: " +req);
});

/**
 * Routes
 */
app.use('/user', userRoutes);
app.use('/', publicRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on ${PORT}`));

