import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// POST route to handle form submission
app.post("/submit", (req, res) => {
  console.log(req.body); // This will log the form data to the console
  res.send("Received the form data!"); // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});





