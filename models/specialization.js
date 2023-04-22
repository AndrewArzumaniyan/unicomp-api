import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const specializationSchema = new Schema({
  _id: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  exam1: {
    type: String,
    required: true,
  },
  exam2: {
    type: String,
    required: true,
  },
});

const Specialization = mongoose.model('Specialization', specializationSchema);

export { Specialization }