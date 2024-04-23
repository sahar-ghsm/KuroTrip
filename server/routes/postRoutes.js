import express from "express";
import Post from "../models/Post.js";

const postRoutes = express.Router();

const getPostByCategory = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

postRoutes.route("/").get(getPostByCategory);

export default postRoutes;
