import React from 'react';
import Card from '../../molecules/card'

const DocumentCard = ({ document }) => (
    <Card
        src={document.cover.url}
        alt={document.cover.alternativeText}
        url={document.file.url}
        target="_blank"
        imgLabel={document.cover.caption}
        width="480"
        height="280"
        className="col-6 col-lg-4"
        key={document.id}
    >
        <ul>
            {/* <li>ID: {document.id}</li> */}
            <li>Título: {document.title}</li>
            <li>Descrição: {document.description}</li>
            <li>Data: {document.updatedAt}</li>
            <li>Páginas: {document.pageCount}</li>
        </ul>
    </Card>
);


export default DocumentCard;