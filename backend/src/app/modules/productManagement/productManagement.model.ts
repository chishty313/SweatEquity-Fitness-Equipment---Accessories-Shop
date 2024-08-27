import { model, Schema } from 'mongoose';
import { TProduct } from './productManagement.interface';

const productSchema = new Schema<TProduct>({
  title: {
    type: String,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  stock: {
    type: Number,
    trim: true,
  },
});

export const ProductModel = model('ProductModel', productSchema);
