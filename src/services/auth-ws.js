import {_api} from './api';

export const signupEP = (data) => _api.post('/auth/login',data);
export const loginEP = (data) => _api.post('/auth/login',data);
export const currentUserEP = () => _api.get('/auth/logged-in');
export const logoutEP = () => _api.get('/auth/logout');