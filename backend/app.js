"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/db");
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/api/signup", async (req, res) => {
  const userData = req.body;
  try {
    const { signUpSchema } = await import("../schema/SignUpSchema.js");
    signUpSchema.parse(userData);

    const query = "INSERT INTO Users (email, password) VALUES ($1, $2)";
    await pool.query(query, [userData.email, userData.password]);
    res.status(201).send("User created successfully.");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({
      message: "An error occurred while creating the user.",
      error: error.message,
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
