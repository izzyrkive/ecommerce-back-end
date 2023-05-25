// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
  }
}

// Categories have many Products
class Category extends Model {
  static associate(models) {
    Category.hasMany(models.Product, { foreignKey: 'category_id' });
  }
}

// Products belongToMany Tags (through ProductTag)
class Product extends Model {
  static associate(models) {
    Product.belongsToMany(models.Tag, { through: 'ProductTag', foreignKey: 'product_id' });
  }
}

// Tags belongToMany Products (through ProductTag)
class Tag extends Model {
  static associate(models) {
    Tag.belongsToMany(models.Product, { through: 'ProductTag', foreignKey: 'tag_id' });
  }
}

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
