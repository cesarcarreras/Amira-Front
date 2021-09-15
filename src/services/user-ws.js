import {_api} from './api';

export const allUsersEP = (data) => _api.get('/users/all-users', data);
export const createUserEP = (data) => _api.post('/users/create-user', data);
export const oneUser = (id) => _api.get(`/users/details-user/${id}`);
export const deleteUserEP = (id) => _api.delete(`/users/delete-user/${id}`);