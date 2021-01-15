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

const api = axios.create({
    baseURL: 'http://134.209.174.64'
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
    },

    getManuscripts(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.MANUSCRIPT
        })
    },

    getLetters(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.LETTER
        })
    },

    getPhotos(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.PHOTO
        })
    },

    getNewspapers(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.NEWSPAPER
        })
    },

    getBooks(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.BOOK
        })
    },

    getMagazines(params: IRequestDocumentsParams = {}) {
        return documentService.getDocuments({
            ...params,
            type: DOCUMENT_TYPE.MAGAZINE
        })
    },
}
