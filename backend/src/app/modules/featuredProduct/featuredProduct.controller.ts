import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FeaturedProductServices } from './featuredProduct.service';

const createFeaturedProduct = catchAsync(async (req, res) => {
  const result = await FeaturedProductServices.createFeaturedProductIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured product is created successfully!',
    data: result,
  });
});

const getAllFeaturedProducts = catchAsync(async (req, res) => {
  const result = await FeaturedProductServices.getAllFeaturedProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Featured products are retrived successfully!',
    data: result,
  });
});

const deleteFeaturedProduct = catchAsync(async (req, res) => {
  const result = await FeaturedProductServices.deleteFeaturedProductFromDB(
    req.params.productId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured product is deleted successfully!',
    data: result,
  });
});

export const FeaturedProductControllers = {
  createFeaturedProduct,
  getAllFeaturedProducts,
  deleteFeaturedProduct,
};
