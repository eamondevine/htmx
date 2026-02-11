import express from "express";
import articles from "../dummy-data/articles.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Test App", articles: articles });
});

export default router;
