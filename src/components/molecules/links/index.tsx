import React from 'react'
// import Link from 'react/link'
import Link from '../../atoms/link'

type Props = {
    listLinks: Record<string, any>
}

const Links = ({ listLinks }: Props) => (
    <div>
        <ul className="list-links">
            {listLinks.childrenListLinks.map((linkItem, index) => (
                // eslint-disable-next-line react/jsx-key
                <li key={index}>
                    {/* <Link
                        label={linkItem.link.label}
                        url={linkItem.link.label}
                    /> */}
                    <a href={linkItem.link.url}>{linkItem.link.label}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default Links
