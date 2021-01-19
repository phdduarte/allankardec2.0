import { useEffect, useState } from 'react'
import { documentService, IRequestDocumentsParams } from '../services/document.service'

export const useDocumentPageCount = (search: IRequestDocumentsParams, documentsPerPage: number = 12) => {
    const [documentCount, setDocumentCount] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        (async () => setDocumentCount(await documentService.getCount(search)))()
    }, [search]);

    useEffect(() => {
        if (documentCount == 0 || documentCount <= documentsPerPage) setPageCount(0);

        setPageCount((documentCount / documentsPerPage) + 1);

    }, [documentsPerPage, documentCount])


    return pageCount;
}