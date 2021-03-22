/* eslint-disable camelcase */
import axios from 'axios'
import qs from 'qs'

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
    _limit?: number
    _start?: number
    _sort?: string
    type?: DOCUMENT_TYPE
    page?: number
    title_contains?: string
    metadata_contains?: string
}

export const API_BASE_URL = 'http://161.35.184.199'

const api = axios.create({
    baseURL: API_BASE_URL
})

export const documentService = {
    getDocuments(params: IRequestDocumentsParams = {}) {
        const { page, ...queryParams } = params

        const query = qs.stringify({
            _where: {
                _or: [
                    {
                        title_contains: queryParams.title_contains
                    },
                    { metadata_contains: queryParams.metadata_contains },
                    { document_type_eq: queryParams.type }
                ]
            },
            _limit: 12,
            _start: Math.max((page || 1) * 12 - 12, 0),
            ...queryParams
        })

        return api.get(`/documents?${query}`).then(({ data }) => data)
    },

    getDocumentsByType(typeId: string) {
        return api
            .get(`/documents?document_type_eq=${typeId}`)
            .then(({ data }) => data)
    },

    getCount(params: IRequestDocumentsParams = {}) {
        return api.get('/documents/count', { params }).then(({ data }) => data)
    },

    getDocument(documentId: string) {
        return api.get(`/documents/${documentId}`).then(({ data }) => data)
    },

    search({ title }) {
        return documentService
            .getDocuments({ title_contains: title })
            .then(({ data }) => data)
    },

    getDocumentsBySlug(slug: string) {
        const query = qs.stringify({
            _where: [{ 'document_type.slug': slug }]
        })

        console.log(`/documents?${query}`)

        return api.get(`/documents?${query}`).then(({ data }) => data)
    },

    getDocumentCountBySlug(slug: string) {
        const query = qs.stringify({
            _where: [{ 'document_type.slug': slug }]
        })

        console.log(`/documents?${query}`)

        return api.get(`/documents/count?${query}`).then(({ data }) => data)
    },

    getAllDocuments() {
        return documentService
            .getDocuments({ _limit: -1 })
            .then(({ data }) => data)
    },

    getDocumentTypeBySlug(slug: string) {
        return api
            .get(`/document-types?slug_eq=${slug}`)
            .then(({ data }) => data)
    },

    getDocumentTypes() {
        return api.get('/document-types').then(({ data }) => data)
    }
}
