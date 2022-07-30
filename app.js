const express = require('express');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars')

const app = express();

// route setting
app.get('/',(req, res) => {
    res.render('index');
  })


// setting static files
app.use(express.static(__dirname + '/public'));

//setting template engine
app.engine('handlebars', exphbs.engine('defaultLayout: index'))
app.set('view engine', 'handlebars')


//Connect to database
connectDB();

app.use(express.json({extented: false}));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));



const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

