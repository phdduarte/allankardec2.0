import React from 'react';
import Card from '../../molecules/card'

const DocumentCard = ({ document, href }) => {
    
    const formattedDate = new Date(document.updatedAt).toLocaleDateString("pt-Br")

    return (


        <Card
            src={document.cover.url}
            alt={document.cover.alternativeText}
            url={href}
            target="_blank"
            imgLabel={document.cover.caption}
            layout="intrinsic"
            key={document.id}
        >
            <ul>
                {/* <li>ID: {document.id}</li> */}
                <li>Título: {document.title}</li>
                <li>Descrição: {document.description}</li>
                <li>Data: {formattedDate}</li>
                <li>Páginas: {document.pageCount}</li>
                <li>
                    <a href={href} target="_blank">Abrir</a>
                    {/* | <a target="_blank" href={document.file.url} download={document.title}>Download</a> */}
                </li>
            </ul>
        </Card>
    )
    
}

export default DocumentCard;