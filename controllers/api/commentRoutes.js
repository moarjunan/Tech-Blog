const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log(req.body);

  try {
    const { body, session } = req;
    const newComment = await createComment(body, session.user_id);
    
    res.status(200).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Bad Request" });
  }
});

async function createComment(commentData, userId) {
  return Comment.create({
    ...commentData,
    user_id: userId,
  });
}

module.exports = router;
