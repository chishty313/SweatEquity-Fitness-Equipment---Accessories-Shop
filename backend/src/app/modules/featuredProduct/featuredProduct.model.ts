import { model, Schema } from 'mongoose';
import { TFeaturedProduct } from './featuredProduct.interface';

const featuredProductSchema = new Schema<TFeaturedProduct>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'ProductModel',
    required: true,
  },
});

export const FeaturedProductModel = model(
  'FeaturedProductModel',
  featuredProductSchema,
);
