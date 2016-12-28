var path = require('path');
var express = require('express');
var handlebars = require('express3-handlebars');
var app = express();

// set up handlebars view engine
app.set('views', path.join(__dirname, 'views/layouts/'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) { res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){ res.status(404);
  res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){ console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
