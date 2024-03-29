const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
});

Post.belongsTo(User, {
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
