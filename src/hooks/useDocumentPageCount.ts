import { useEffect, useState } from 'react'
import { documentService, IRequestDocumentsParams } from '../services/document.service'

export const useDocumentPageCount = (search: IRequestDocumentsParams, documentsPerPage: number = 12) => {
    const [documentCount, setDocumentCount] = useState(0);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        (async () => setDocumentCount(await documentService.getCount(search)))()
    }, [search]);

    useEffect(() => {
        (documentCount == 0 || documentCount <= documentsPerPage) ?
            setPageCount(1) :
            setPageCount(Math.floor(documentCount / documentsPerPage))

        // if (documentCount == 0 || documentCount <= documentsPerPage) setPageCount(1);

        // setPageCount((documentCount / documentsPerPage) + 1);

    }, [documentsPerPage, documentCount])


    return pageCount;
}