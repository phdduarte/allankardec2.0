import React from 'react'

type Props = {
    text?: string
    linkText?: string
    url?: string
}

const Footer = ({ text, linkText, url }: Props) => {
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
