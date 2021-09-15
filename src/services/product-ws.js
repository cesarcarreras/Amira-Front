import {_api} from './api';

export const createProductEP = (data) => _api.post('/products/create-product', data);
export const allProductsEP = (data) => _api.get('/products/all-products', data);
export const productDetailEP = (id) => _api.get(`/products/product-detail/${id}`);
export const updateProductEP = (data, id) => _api.patch(`/products/update-product/${id}`, data);
export const deleteProductEP = (id) => _api.delete(`/products/delete-product/${id}`);