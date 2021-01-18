import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
    fileUrl: string;
}

const PdfViewer: React.FC<Props> = ({ fileUrl }) => {
    return (
        <>
            <Document file={fileUrl}>
                <Page pageNumber={1} />
            </Document>
        </>
    )
}

export default PdfViewer;