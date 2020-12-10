import style from 'styled-components'

const LinksContainer = style.div`

    h3 {
        font-size: 25 px;
        color: ${props => props.theme.colors.text}; 
    }
    div {
        border-style: solid;
        display: block;
        padding: 0.5rem 0.5rem;
        background-color: #fff;
        font-size : 30 px;
        text-align: center;
        line-height: 2.0em;
        
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    a:hover {
        color: dark;
    }
`
//     div {
//         position: relative;
//         padding: 0.5rem 0.75rem;
//         margin-left: -1px;
//         line-height: 1.5;
//         font-family: 'Open Sans', sans-serif;
//         font-size : 20 px;
//         color: black;
//         justify-content: center;
//     }
// `

export const AllLinksContainer = style.div`
    * {
        
        display: block;
        justify-content: center;
        text-align: center;
        position: relative;
    }
`

export default LinksContainer
