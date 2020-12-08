import React from 'react'
import Menu from '../../molecules/menu'

type Props = {
    text?: string
    linkText?: string
    url?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listNavLinks?: Record<string, any>
    placeholder?: string
    buttonLabel?: string
}

const Footer = ({
    text,
    linkText,
    url,
    placeholder = 'Digite aqui sua pesquisa',
    buttonLabel = 'Pesquisar',
    listNavLinks
}: Props) => {
    return (
        <>
            <footer>
                <p>
                    {text}
                    <a href={url}>{linkText}</a>
                </p>
            </footer>
        </>
    )
}

export default Footer
