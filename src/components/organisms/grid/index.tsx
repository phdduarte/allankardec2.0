import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}
const Grid = ({ children }: Props) => (
    <div className="container cards">
        <div className="row">
            {children}
        </div>
    </div>
)

export default Grid
