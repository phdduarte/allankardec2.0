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
                key={index}
                src={cardItem.src}
                alt={cardItem.alt}
                url={cardItem.url}
                title={cardItem.cardTitle}
                width={listCardItems.width}
                height={listCardItems.height}
            >
                <span>ID: {cardItem.id}</span>
                <span>Título: {cardItem.documentTitle}</span>
                <span>Descrição: {cardItem.description}</span>
                <span>Data: {cardItem.date}</span>
                <span>Páginas: {cardItem.pages}</span>
            </Card>
        ))}
    </div>
)

export default Cards
