const express = require('express'),
      app     = express();

const homeRoutes = require('./routes/home'),
      blogRoutes = require('./routes/blogs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(homeRoutes);
app.use(blogRoutes);

//Server set up
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => { 
  console.log('Server is up on port ' + PORT);
});
