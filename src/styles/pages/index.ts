import style from 'styled-components'

export const AllTypeContainer = style.div`
    * {
        text-align: center;
        position: relative;
        margin-top: 10px;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        transition: all 0.3s;
    }
    a:hover {
        text-decoration: bold;
        text-decoration: underline;
        color: black;
    }
    a img {
        max-height: 300px;
        margin-bottom: 10px;
    }
    a div {
        display: block;
    }
`
