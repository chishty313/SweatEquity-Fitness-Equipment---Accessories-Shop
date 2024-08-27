import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { ProductModel } from '../productManagement/productManagement.model';
import { FeaturedProductModel } from './featuredProduct.model';
import { TFeaturedProduct } from './featuredProduct.interface';

const createFeaturedProductIntoDB = async (payload: TFeaturedProduct) => {
  const { productId } = payload;
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product does not exist!');
  }

  await FeaturedProductModel.create(payload);

  return product;
};

const getAllFeaturedProductsFromDB = async () =>
  await FeaturedProductModel.find().populate('productId');

const deleteFeaturedProductFromDB = async (id: string) =>
  await FeaturedProductModel.findByIdAndDelete(id);

export const FeaturedProductServices = {
  createFeaturedProductIntoDB,
  getAllFeaturedProductsFromDB,
  deleteFeaturedProductFromDB,
};
