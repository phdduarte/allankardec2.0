import style from 'styled-components'

const LinksContainer = style.div`
    h3 {
        font-size: 25 px;
        color: ${props => props.theme.colors.text}; 
    }
    div {
        display: block;
        background-color: #fff;
        font-size : 30 px;
        line-height: 2.0em;
        
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    a:hover {
        color: dark;
    }
`

export default LinksContainer
