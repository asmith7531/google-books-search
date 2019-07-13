const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
// Use morgan logger for logging requests
app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true
});
// Define API routes here
// // A GET route for scraping the website
// app.get("/scrape", function (req, res) {
//   // First, we grab the body of the html with axios
//   axios.get("http://www.echojs.com/").then(function (response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function (i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       // Create a new Article using the `result` object built from scraping
//       db.Article.create(result)
//         .then(function (dbArticle) {
//           // View the added result in the console
//           console.log(dbArticle);
//         })
//         .catch(function (err) {
//           // If an error occurred, log it
//           console.log(err);
//         });
//     });

//     // Send a message to the client
//     res.send("Scrape Complete");
//   });
// });


// Route for getting all Articles from the db
app.get("/books", function (req, res) {
  // Grab every document in the Articles collection
  db.Book.find({})
    .then(function (dbBook) {
      // If we were able to successfully find books, send them back to the client
      res.json(dbBook);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// Route for deleting a Book
app.post("/books/:id", function (req, res) {
  db.Book.findOneAndDelete({
    _id: req.params.id
  }, {
    note: dbNote._id
  }, {
    new: true
  });
})


// Route for grabbing a specific Books by id, populate it with it's note
app.get("/books/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Book.findOne({
      _id: req.params.id
    })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function (dbBook) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbBook);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});