import React from 'react'

// atoms
import CustomCard from '../../molecules/customCard'

type Props = {
    list: Record<string, any>
}

const List = ({ list }: Props) => (
    <div className="row">
        {list.cards.map((item, index) => (
            <div key={index} className="col-sm">
                <CustomCard item={item}/>
            </div>
        ))}
    </div>
)

export default List
