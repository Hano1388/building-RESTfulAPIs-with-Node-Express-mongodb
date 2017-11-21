import express from 'express'; // importing express

const app = express(); // creating an instance of express

const PORT = 3000;

// make sure that we get something when we are calling '/' url
app.get('/', (req, res) =>
  res.send(`Node and espress server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);
