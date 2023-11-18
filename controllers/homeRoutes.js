const express = require("express");
const router = express.Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await getAllPosts();

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const postData = await getPostById(postId);

    if (!postData) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = postData.get({ plain: true });

    res.render("singlepost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await getUserProfile(req.session.user_id);

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

async function getAllPosts() {
  return Post.findAll({
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  });
}

async function getPostById(postId) {
  return Post.findByPk(postId, {
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Comment,
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  });
}

async function getUserProfile(userId) {
  return User.findByPk(userId, {
    attributes: { exclude: ['password'] },
    include: [{ model: Post }],
  });
}

module.exports = router;
