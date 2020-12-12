import React from 'react'

import Card from '../../molecules/card'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listCardItems: Record<string, any>
}
const Cards = ({ listCardItems }: Props) => (
    <div>
        {listCardItems.childrenListCardItems.map((cardItem, index) => (
            <Card
                src={cardItem.cardItem.src}
                alt={cardItem.cardItem.alt}
                url={cardItem.cardItem.url}
                title={cardItem.cardItem.cardTitle}
                width={cardItem.cardItem.width}
                height={cardItem.cardItem.height}
                key={index}
            >
                <ul>
                    <li>ID: {cardItem.cardItem.id}</li>
                    <li>Título: {cardItem.cardItem.documentTitle}</li>
                    <li>Descrição: {cardItem.cardItem.description}</li>
                    <li>Data: {cardItem.cardItem.date}</li>
                    <li>Páginas: {cardItem.cardItem.pages}</li>
                </ul>
            </Card>
        ))}
    </div>
)

export default Cards
