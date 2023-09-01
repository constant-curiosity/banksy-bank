"Use Strict";

const express = require("express");
const app = express();
const cors = require("cors");
const signUpSchema = require("../schema/SignUpSchema");
const pool = require("./database/db");
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/api/signup", async (req, res) => {
  const userData = req.body;
  console.log(userData, "node_server");
  try {
    const query = "INSERT INTO Users (email, password) VALUES ($1, $2)";
    await pool.query(query, [userData.email, userData.password]);
    res.status(201).send("User created successfully.");
  } catch (error) {
    console.error(error);
    console.error("Error creating user:", error);
    res.status(400).json({
      message: "An error occurred while creating the user.",
      error: error.message, // Include the error message from the caught error
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

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
