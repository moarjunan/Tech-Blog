const express = require("express");
const router = express.Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const { body, session } = req;
    const newPost = await createPost(body, session.user_id);

    res.status(200).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Bad Request" });
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const { params, session } = req;
    const postData = await deletePost(params.id, session.user_id);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function createPost(postData, userId) {
  return Post.create({
    ...postData,
    user_id: userId,
  });
}

async function deletePost(postId, userId) {
  return Post.destroy({
    where: {
      id: postId,
      user_id: userId,
    },
  });
}

module.exports = router;
