const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const { User } = require('../../models');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

User.hasMany (Post, {
    foreignKey: 'user_id',
});

Comment.belongsTo (User, {
    foreignKey: 'post_id'
});

Comment.belongsTo (Post, {
    foreignKey: 'post_id'
});

User.hasMany (Comment, {
    foreignKey: 'user_id'
});

Post.hasMany (Comment, {
    foreignKey: 'post_id'
});

module.exports = router;
