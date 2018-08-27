import mongoose from 'mongoose';

const stores = mongoose.Schema({
    id: Number,
    address: String,
    name: String,
  });

  let store = mongoose.model("stores", stores);

  export default store;