import React from 'react'
import Card from '../../molecules/card'

const DocumentCard = ({ document }) => {
    const formattedDate = new Date(document.date).toLocaleDateString('pt-Br')

    return (
        <Card
            src={document.cover.url}
            alt={document.cover.alternativeText}
            url={document.fileUrl || document.file?.url}
            target="_blank"
            imgLabel={document.cover.caption}
            layout="intrinsic"
            key={document.id}
            title={document.title}
        >
            <ul>
                {/* <li>ID: {document.id}</li> */}
                <li>Título: {document.title}</li>
                <li>Descrição: {document.description}</li>
                <li>Data: {formattedDate}</li>
                <li>Páginas: {document.pageCount}</li>
                <li>
                    <a
                        href={document.fileUrl || document.file?.url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Abrir
                    </a>
                </li>
            </ul>
        </Card>
    )
}

export default DocumentCard
