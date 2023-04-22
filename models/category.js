import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model('Category', categorySchema);
export { Category }