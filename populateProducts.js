const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
  {
    id: 1,
    name: "Wild Rider Layers Unisex Sneakers",
    price: 121,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/02/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 2,
    name: "Wild Rider Layers 2 Unisex Sneakers",
    price: 151,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/03/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 3,
    name: "Wild Rider Layers Unisex3 sneakers",
    price: 161,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/01/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    name: "PUMA Serve Pro Lite Unisex shoes",
    price: 261,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/01/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 5,
    name: "PUMA Serve Pro Lite Unisex",
    price: 321,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/11/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 6,
    name: "one8 Virat Kohli Basket Classice Unisex Sneakers",
    price: 371,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375314/01/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 7,
    name: "Caracal SoftFoam+Sneakers",
    price: 171,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369863/18/sv01/fnd/IND/fmt/png/Caracal-SoftFoam+-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 8,
    name: "Mirage Mox Brightly Packed Shoes",
    price: 271,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375168/01/sv01/fnd/IND/fmt/png/Mirage-Mox-Brightly-Packed-Shoes",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 9,
    name: "Future Rider Play On Unisex Sneakers",
    price: 571,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/69/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 10,
    name: "Future Rider2 Play On Unisex Sneakers",
    price: 571,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/68/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 11,
    name: "Future Rider3 Play On Unisex Sneakers",
    price: 571,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/72/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 12,
    name: "Rebound Lay-Up Lo SoftFoam+Mesh Shoes",
    price: 571,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/370914/01/sv01/fnd/IND/fmt/png/Rebound-Lay-Up-Lo-SoftFoam+-Mesh-Shoes",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 13,
    name: "one8 Virat Kohli Basket Classic Unisex Sneakers",
    price: 471,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375314/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 14,
    name: "Mirage Mox Brightly Packed Shoes",
    price: 271,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375168/01/sv01/fnd/IND/fmt/png/Mirage-Mox-Brightly-Packed-Shoes",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 15,
    name: "Future Rider Play On Unisex Sneakers",
    price: 571,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371149/69/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
    description: "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
    quantity: 1,
    rating: { rate: 4.7, count: 500 }
  },
  // New Products
  {
    id: 21,
    name: "Puma RS-X³ Puzzle Sneakers",
    price: 130,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/372104/03/sv01/fnd/IND/fmt/png/RS-X³-Puzzle-Sneakers",
    description: "A new twist on a classic design, these sneakers offer maximum comfort and style with a bold, futuristic look.",
    quantity: 1,
    rating: { rate: 4.6, count: 200 }
  },
  {
    id: 22,
    name: "Puma X-Ray 2 Square Sneakers",
    price: 145,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/372105/01/sv01/fnd/IND/fmt/png/X-Ray-2-Square-Sneakers",
    description: "Designed for those who love to stand out, these sneakers combine comfort with a contemporary design.",
    quantity: 1,
    rating: { rate: 4.5, count: 150 }
  },
  {
    id: 23,
    name: "Puma Cali Star Sneakers",
    price: 160,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/373024/01/sv01/fnd/IND/fmt/png/Cali-Star-Sneakers",
    description: "A stylish sneaker with a retro vibe, perfect for a casual yet fashionable look.",
    quantity: 1,
    rating: { rate: 4.7, count: 300 }
  },
  {
    id: 24,
    name: "Puma Clyde All-Pro Sneakers",
    price: 180,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374489/01/sv01/fnd/IND/fmt/png/Clyde-All-Pro-Sneakers",
    description: "High-performance sneakers built for both style and durability, suitable for everyday wear.",
    quantity: 1,
    rating: { rate: 4.8, count: 250 }
  },
  {
    id: 25,
    name: "Puma Future Rider Play On Sneakers",
    price: 190,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/72/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
    description: "A blend of classic and modern, offering a fresh and dynamic look for any outfit.",
    quantity: 1,
    rating: { rate: 4.7, count: 400 }
  },
  {
    id: 26,
    name: "Puma RS-X Tracks Sneakers",
    price: 170,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/372469/01/sv01/fnd/IND/fmt/png/RS-X-Tracks-Sneakers",
    description: "Combining bold colors and innovative design, these sneakers are made to make a statement.",
    quantity: 1,
    rating: { rate: 4.6, count: 220 }
  },
  {
    id: 27,
    name: "Puma Thunder Spectra Sneakers",
    price: 210,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369968/03/sv01/fnd/IND/fmt/png/Thunder-Spectra-Sneakers",
    description: "Featuring a chunky silhouette, these sneakers offer both comfort and a standout look.",
    quantity: 1,
    rating: { rate: 4.7, count: 300 }
  },
  {
    id: 28,
    name: "Puma Suede Classic Sneakers",
    price: 140,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/352635/01/sv01/fnd/IND/fmt/png/Suede-Classic-Sneakers",
    description: "An iconic design with a modern twist, these sneakers offer timeless style and comfort.",
    quantity: 1,
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 29,
    name: "Puma RS-2K Future Sneakers",
    price: 155,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/373455/01/sv01/fnd/IND/fmt/png/RS-2K-Future-Sneakers",
    description: "Designed for the future, these sneakers blend high-tech features with a sleek design.",
    quantity: 1,
    rating: { rate: 4.6, count: 180 }
  },
  {
    id: 30,
    name: "Puma Cell Alien Sneakers",
    price: 200,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/372340/01/sv01/fnd/IND/fmt/png/Cell-Alien-Sneakers",
    description: "A fusion of retro and futuristic elements, these sneakers are built for comfort and style.",
    quantity: 1,
    rating: { rate: 4.7, count: 230 }
  },
  {
    id: 31,
    name: "Puma RS-X Reinvent Sneakers",
    price: 175,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/372610/01/sv01/fnd/IND/fmt/png/RS-X-Reinvent-Sneakers",
    description: "These sneakers offer a bold, updated look with superior cushioning and support.",
    quantity: 1,
    rating: { rate: 4.8, count: 270 }
  }
];

async function seedProducts() {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear the existing products
    await Product.deleteMany({});

    // Insert the new products
    await Product.insertMany(products);

    console.log('Products seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

seedProducts();
