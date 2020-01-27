const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const app = express();
const mongoose = require("mongoose")

const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
    
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.set('view-engine','html')//set view type to html
app.engine('html',require('ejs').renderFile)

// Express body parser
app.use(express.urlencoded({ extended: false }));


app.set('views', __dirname + '/views')

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
const PORT = process.env.PORT || 5000;
app.listen(PORT , console.log(`server don start`));


// index.ejs is a file in layouts in views and it contains 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css">
    <title>Node.js & Passport Login App</title>
  </head>
  <body>
    <div class="container"><%- body %></div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
      integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

