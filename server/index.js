require('dotenv').config();

const express     =    require('express'),
      bodyParser  =    require('body-parser'),
      morgan      =    require('morgan'),
      cors        =    require('cors'), 
      mongoose    = require('mongoose')  
      app         =    express();

app.use(express.urlencoded({ extended: false })); 
const userRoute = require('./routes/user')
const questionRoute = require('./routes/question')
const answerRoute = require('./routes/answer')

const errorHandler = require('./controllers/err')

  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));

  app.use('/api', userRoute)
  app.use('/api', questionRoute)
    app.use('/api', answerRoute)
  
app.get('/test', (req,res)=>{
    res.send('hello')
})

  // error handling
  
    app.use(function(req,res,next){
       err = new Error("not found");
      err.status = 404;
        next(err);
  })

  
 
  app.use(errorHandler);

  app.listen(5000);

    