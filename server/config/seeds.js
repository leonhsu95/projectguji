const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Coffee' },
    { name: 'Supplies' },

  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Artisan Blend - 250g',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'artisan-blend.png',
      category:  categories[0]._id,
      price: 29.00,
      quantity: 500
    },
    {
      name: 'Biz Blend - 500g',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'biz-blend.png',
      category:  categories[0]._id,
      price: 30.99,
      quantity: 500
    },
    {
      name: 'Impressa Blend - 500g',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'impressa-blend.png',
      category:  categories[0]._id,
      price: 24.99,
      quantity: 500
    },
    {
      name: 'Lavazza Blend - 1kg',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'lavazza-blend.png',
      category:  categories[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Maverick Blend - 250g',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'maverick-blend.png',
      category:  categories[0]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Tag Blend - 340g',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'tag-blend.png',
      category:  categories[0]._id,
      price: 16.99,
      quantity: 500
    },
    {
      name: 'Hario Cold Brew Pot 1L - Black',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'hario-cold-bew-pot.jpg',
      price: 36.9,
      quantity: 20
    },
    
  ]);

  console.log(products);
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Leon',
    lastName: 'Hsu',
    email: 'leonhsu95@gmail.com',
    password: 'admin',
    orders: [
      {
        // products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ],
    admin: true
  });

  await User.create({
    firstName: 'Oliver',
    lastName: 'Brown',
    email: 'oliver@ob.com',
    password: 'obUser',
    orders: [
      {
        // products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ],
    admin: false
  });

  console.log('users seeded');

  process.exit();
});
