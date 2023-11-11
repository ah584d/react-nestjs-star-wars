import axios from 'axios';

export const initAxios = (): void => {
    axios.defaults.baseURL = 'http://localhost:3000/api/v1';
    axios.defaults.timeout = 60000;
};

export const setTokenOnHttpHeader = (token: string): void => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteTokenOnHttpHeader = (): void => {
    delete axios.defaults.headers.common['Authorization'];
};

export { axios as networkManager };
