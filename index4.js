import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

const bandNameGenerator = (req, res, next) => {
bandName = req.body["street"] + req.body["pet"];
next()
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// POST route to handle form submission
app.post("/submit", (req, res) => {
  console.log(req.body); // This will log the form data to the console
  res.send(`<h1>Your band name is: </h1><br><h2>${bandName}</h2>`); // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
