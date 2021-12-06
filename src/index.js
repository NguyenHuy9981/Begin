const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes');
const db_connect = require('./config/db');
const sortmidleware = require('./app/middlewares/sortMidleware')

app.use(sortmidleware)


// Connect to DB
db_connect();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Method
app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: require('./app/helpers/handlebars')
  

}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})