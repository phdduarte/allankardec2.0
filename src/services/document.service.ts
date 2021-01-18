import axios from 'axios';

export enum DOCUMENT_TYPE {
    MANUSCRIPT = 0,
    LETTER = 1,
    PHOTO = 2,
    NEWSPAPER = 3,
    BOOK = 4,
    MAGAZINE = 5
}

interface IRequestDocumentsParams {
    _limit?: number;
    _start?: number;
    type?: DOCUMENT_TYPE;
    page?: number;
}

export const API_BASE_URL = 'http://134.209.174.64'

const api = axios.create({
    baseURL: API_BASE_URL
});

export const documentService = {
    getDocuments(params: IRequestDocumentsParams = {}) {
        const { page, ...queryParams } = params;

        return api.get('/documents', {
            params: {
                _limit: 12,
                _start: Math.max(((page || 0) * 12) - 12, 0),
                ...queryParams
            }
        }).then(({ data }) => data)
        
    },

    getCount(params: IRequestDocumentsParams = {}) {
        return api.get('/documents/count', { params })
            .then(({ data }) => data)
    },

    getDocument(documentId: string) {
        return api.get(`/documents/${documentId}`)
            .then(({ data }) => data)
    },

}
