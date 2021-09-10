const express = require("express");
const PostMessage = require("../modals/postMessage");

const router = express.Router();
module.exports = () => {
  router.get("/", async (req, res) => {
    try {
      const postMessage = await PostMessage.find();

      res.status(200).json(postMessage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.post("/", async (req, res) => {
    const post = req.body;

    const newpost = new PostMessage(post);

    try {
      await newpost.save();

      res.status(201).json(newpost);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  return router;
};
