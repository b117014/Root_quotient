require('dotenv').config();

const express     =    require('express'),
      bodyParser  =    require('body-parser'),
      morgan      =    require('morgan'),
      cors        =    require('cors'),
      
      app         =    express();


  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));



    // error handling
  
    app.use(function(req,res,next){
       err = new Error("not found");
      err.status = 404;
        next(err);
  })
 


  

  app.listen(process.env.PORT || 4000);

    