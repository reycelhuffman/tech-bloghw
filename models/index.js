const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
});

Post.belongsTo(User, {
});

Post.hasMany(Comment, {
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'comment_id'
});

module.exports = { User, Post, Comment };
