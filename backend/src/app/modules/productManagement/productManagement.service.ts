import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './productManagement.interface';
import { ProductModel } from './productManagement.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productServiceSearchableFields } from './productManagement.constant';

const createProductIntoDB = async (payload: TProduct) =>
  await ProductModel.create(payload);

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(ProductModel.find(), query)
    .search(productServiceSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate();

  return await productQuery.modelQuery;
};

const getSingleProductFromDB = async (id: string) => {
  const product = await ProductModel.findById(id);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product does not exists!');
  }

  return product;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const isProductExist = await ProductModel.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product does not exists!');
  }

  return await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteProductFromDB = async (productId: string) => {
  const isProductExist = await ProductModel.findById(productId);
  if (!isProductExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product does not exists!');
  }

  return await ProductModel.findByIdAndDelete(productId);
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
