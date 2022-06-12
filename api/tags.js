const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/posts", async (req, res) => {
  const tags = await getAllTags();
  //console.log(tags);
  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  const { tagName } = req.params;
  try {
    const postByTagName = await getPostsByTagName(tagName);
    res.send({ post: postByTagName });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;