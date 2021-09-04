import {_api} from './api';

export const allUsersEP = (data) => _api.get('/users/all-users', data);
