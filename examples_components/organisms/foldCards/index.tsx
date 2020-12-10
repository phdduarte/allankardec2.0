import React from 'react';

// molecules
import ListCards from '../listCards';

type Props = {
    // title
    titleFoldCards: string
    // list
    listCards: Record<string, any>
}

const FoldCards = ({ 
    titleFoldCards,
    listCards,
}: Props) => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-uppercase pb-4 h4">{titleFoldCards}</h1>
                <ListCards 
                    list={listCards}
                />
            </div>
        </div>
    )
}

export default FoldCards
