import mongoose from 'mongoose';

const articles = mongoose.Schema({
    id: Number,
    description: String,
    name: String,
    price: Number,
    total_in_shelf: Number,
    total_in_vault: Number,
    store_name: String,
    store_id: Number
  });

  let article = mongoose.model("articles", articles);

  export default article;