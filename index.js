const express = require('express');
const randomQuotes = require('random-quotes');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (e.g., CSS and client-side JavaScript)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve an HTML page with a form
});

app.post('/get-quotes', (req, res) => {
  const authorName = req.body.authorName;
  const quotes = randomQuotes.byAuthor(authorName);

  if (quotes.length > 0) {
    res.send(quotes.join('<br>')); // Display quotes on a new page or update the existing one
  } else {
    res.send(`No quotes found for author "${authorName}".`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

