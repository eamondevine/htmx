import express from "express";
import router from "./routes/index.js";

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine
app.set("view engine", "pug");

// routes
app.use("/", router);

// listening on port 3000
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
