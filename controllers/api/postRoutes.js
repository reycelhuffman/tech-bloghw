const router = require('express').Router();
const { Post } = require('../../models');
const { findAll } = require('../../models/User');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try { 
    const newPost = await Post.findAll({
      include: [
        attributes: [
          'id',
          'title',
          'post_contents',
          'date_created',
        ],

      ]
    },
}
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      title: req.body.title,
      post_contents: req.body.pose_contents,

    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
