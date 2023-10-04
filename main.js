// run `node main.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
