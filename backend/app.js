const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// API route example
app.post("/api/signup", (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.status(201).send("Works");
});

app.use((err, req, res, next) => {
  // Handle errors
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const path = require("path"); // Add this line

// Serve the built React app
// app.use(express.static(path.join(__dirname, "path-to-your-built-react-app")));

// const builtReactAppPath = join(__dirname, "path-to-your-built-react-app");
// if (fs.existsSync(builtReactAppPath)) {
//   app.use(static(builtReactAppPath));
// } else {
//   console.error(`Error: ${builtReactAppPath} does not exist`);
// }
