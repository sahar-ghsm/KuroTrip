import dotenv from "dotenv";
dotenv.config();
import db from "./db.js";
import express from "express";

import postRoutes from "./routes/postRoutes.js";

db();
const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
    limit: "50mb",
  })
);

app.use("/api/blog-posts", postRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
