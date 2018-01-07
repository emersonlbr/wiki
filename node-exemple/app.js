const express = require('express'),
      app     = express();

const homeRoutes = require('./routes/home');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

app.use(homeRoutes);

app.listen(process.env.PORT || 4000, () => { 
  console.log('Server is up on port 4000');
});