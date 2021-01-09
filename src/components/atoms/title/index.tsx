import React from 'react'

type Props = {
    label: string
}

const Title = ({ label }: Props) => <h1 className="title text-uppercase">{label}</h1>

export default Title
