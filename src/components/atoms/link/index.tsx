import React from 'react'

type Props = {
    label: string
    url: string
}

const Link = ({ label, url }: Props) => <a href={url}>{label}</a>

export default Link
