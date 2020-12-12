import React from 'react'

import Card from '../../molecules/card'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listCardItems: Record<string, any>
}
const Cards = ({ listCardItems }: Props) => (
    <div className="container">
        <div className="row">
            {listCardItems.childrenListCardItems.map((cardItem, index) => (
                <Card
                    src={cardItem.cardItem.src}
                    alt={cardItem.cardItem.alt}
                    url={cardItem.cardItem.url}
                    imgLabel={cardItem.cardItem.imgLabel}
                    width={listCardItems.width}
                    height={listCardItems.height}
                    className={listCardItems.className}
                    key={index}
                >
                    {/* eslint-disable-next-line multiline-ternary */}
                    {cardItem.cardItem.id ? (
                        <ul>
                            <li>ID: {cardItem.cardItem.id}</li>
                            <li>Título: {cardItem.cardItem.documentTitle}</li>
                            <li>Descrição: {cardItem.cardItem.description}</li>
                            <li>Data: {cardItem.cardItem.date}</li>
                            <li>Páginas: {cardItem.cardItem.pages}</li>
                            <li>
                                {' '}
                                <a href="#">abrir</a> | <a href="#">download</a>
                            </li>
                        </ul>
                    ) : (
                        <></>
                    )}
                </Card>
            ))}
        </div>
    </div>
)

export default Cards
