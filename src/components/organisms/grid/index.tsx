import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}
const Grid = ({ children }: Props) => (
    <React.Fragment>
        {children}
    </React.Fragment>
)

export default Grid
