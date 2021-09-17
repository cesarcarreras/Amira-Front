import {_api} from './api';

export const createOrderEP = (data) => _api.post('/orders/create-order', data);
export const allOrdersEP = (data) => _api.get('/orders/all-orders', data);
export const orderDetailEP = (id) => _api.get(`/orders/order-detail/${id}`, id);
export const updateOrderEP = (data, id) => _api.patch(`/orders/update-order/${id}`, data);
export const deleteOrderEP = (id) => _api.delete(`/orders/delete-order/${id}`);
export const trackOrderEP = (orderNumber) => _api.get(`/orders/track-order/:orderNumber`, orderNumber);