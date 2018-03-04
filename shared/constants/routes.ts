export const BASE = 'http://localhost:3000/api';

export const MOVIES_PATH = '/movies';
export const MOVIES_URL = `${BASE}${MOVIES_PATH}`;

export const MOVIES_DETAILS_PATH = (id = ':id') => `${MOVIES_PATH}/${id}`;
export const MOVIES_DETAILS_URL = id => `${BASE}${MOVIES_DETAILS_PATH(id)}`;
