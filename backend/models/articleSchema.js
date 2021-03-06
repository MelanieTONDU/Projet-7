const sequelize = require('../db/db.js');
const { DataTypes } = require('sequelize');
const Comment = require ('./commentSchema');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  imageUrl :{
    type: DataTypes.STRING,
    allowNull: true,
  },
  likes:{ 
    type: DataTypes.NUMBER, 
    default:0 ,
    allowNull: true,
  },
  usersLiked : {
    type : DataTypes.JSON,
    allowNull: true,
  },
  visible : {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  }
});

Article.hasMany(Comment, { foreignKey: 'articles_id', onDelete:'CASCADE'});
Comment.belongsTo(Article, {foreignKey: 'articles_id'});

module.exports = Article;