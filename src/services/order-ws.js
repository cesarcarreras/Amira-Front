import {_api} from './api';

export const allOrdersEP = (data) => _api.get('/orders/all-orders', data);