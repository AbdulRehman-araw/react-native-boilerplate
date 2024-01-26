import apiInstance from '../../../axios';
import { errorHandler } from './errorHandler';

const formUrlConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

const formDataConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const get = async (endPoint, params) => {
    try {
        const result = await apiInstance.get(endPoint,{params});
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const post = async (endPoint, data) => {
    try {
        const result = await apiInstance.post(endPoint, data, formUrlConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const documentPost = async (endPoint, data) => {
    try {
        const result = await apiInstance.post(endPoint, data, formDataConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const resetPasswordPost = async (endPoint, data, token) => {
    try {
        let resetpasswordConfig = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const result = await apiInstance.post(endPoint, data, resetpasswordConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const patch = async (endPoint, data) => {
    try {
        const result = await apiInstance.patch(endPoint, data, formUrlConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const put = async (endPoint, data) => {
    try {
        const result = await apiInstance.put(endPoint, data, formUrlConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const putImage = async (endPoint, data) => {
    try {
        const result = await apiInstance.put(endPoint, data, formDataConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const patchPicture = async (endPoint, data) => {
    try {
        const result = await apiInstance.patch(endPoint, data, formDataConfig);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const deleted = async endPoint => {
    try {
        const result = await apiInstance.delete(endPoint);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};
