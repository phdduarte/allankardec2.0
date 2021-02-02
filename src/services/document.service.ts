import axios from 'axios';

export enum DOCUMENT_TYPE {
    MANUSCRIPT = 0,
    LETTER = 1,
    PHOTO = 2,
    NEWSPAPER = 3,
    BOOK = 4,
    MAGAZINE = 5,
    CSI = 6
}

export interface IRequestDocumentsParams {
    _limit?: number;
    _start?: number;
    _sort?: string;
    type?: DOCUMENT_TYPE;
    page?: number;
    title_contains?: string;
}

export const API_BASE_URL = 'http://161.35.184.199'

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
        })
        .then(({ data }) => data)
        
    },

    getCount(params: IRequestDocumentsParams = {}) {
        return api.get('/documents/count', { params })
            .then(({ data }) => data)
            .catch(err => console.log("AQUI! Erro de requisição anônima (desativar adblocks): " + err))
    },

    getDocument(documentId: string) {
        return api.get(`/documents/${documentId}`)
            .then(({ data }) => data)
    },

    search({ title }) {
        return documentService.getDocuments({ title_contains: title })
            .then(({ data }) => data)
    },

    getAllDocuments() {
        return documentService.getDocuments({ _limit: -1 })
            .then(({ data }) => data)
    }

}
