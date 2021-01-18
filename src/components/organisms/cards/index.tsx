import React from 'react'
import Link from '../../atoms/link'

import Card from '../../molecules/card'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listCardItems: Record<string, any>
}
const Cards = ({ listCardItems }: Props) => (
    <div className="container cards">
        <div className="row">
            {listCardItems.childrenListCardItems.map(cardItem => (
                <Card
                    src={cardItem.cover.url}
                    alt={cardItem.cover.alternativeText}
                    url={cardItem.cover.url}
                    imgLabel={cardItem.cover.caption}
                    width={listCardItems.width}
                    height={listCardItems.height}
                    className={listCardItems.className}
                    key={cardItem.id}
                >
                    {/* eslint-disable-next-line multiline-ternary */}
                    {cardItem.id ? (
                        <ul>
                            <li>ID: {cardItem.id}</li>
                            <li>Título: {cardItem.title}</li>
                            <li>Descrição: {cardItem.description}</li>
                            <li>Data: {cardItem.updatedAt}</li>
                            <li>Páginas: {cardItem.pageCount}</li>
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
