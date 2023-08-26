"Use Strict";
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

// "Use Strict";

// const express = require("express"),
//   app = express(),
//   router = require("./routes/index"),
//   session = require("express-session"),
//   mongoStore = require("connect-mongo"),
//   passport = require("passport");
// require("./config/database");
// require("dotenv").config();
// require("./config/passport");

// app.use(express.static("client"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     proxy: true,
//     name: "community-bank",
//     store: mongoStore.create({
//       mongoUrl: process.env.DB_STRING,
//       collection: "sessions",
//     }),
//     cookie: {
//       httpOnly: true,
//       secure: true,
//       maxAge: 1000 * 60 * 60 * 48,
//       sameSite: "none",
//     },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.set("port", process.env.PORT || 5000);

// app.use("/", router);

// app.listen(app.get("port"), () => {
//   console.log(`Server on localhost:${app.get("port")}`);
// });

// const path = require("path"); // Add this line

// Serve the built React app
// app.use(express.static(path.join(__dirname, "path-to-your-built-react-app")));

// const builtReactAppPath = join(__dirname, "path-to-your-built-react-app");
// if (fs.existsSync(builtReactAppPath)) {
//   app.use(static(builtReactAppPath));
// } else {
//   console.error(`Error: ${builtReactAppPath} does not exist`);
// }
