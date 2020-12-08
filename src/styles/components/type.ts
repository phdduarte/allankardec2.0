import style from 'styled-components'

const TypeContainer = style.div`
    * {
        display: block;
        position: relative;
        width: content-width;
    }
    #type {
        position: relative;
        padding: 20px 10px;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
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

`

export const AllTypeContainer = style.div`
    * {
        width: 100vw:
        display: flex;
        justify-content: center;
        text-align: center;
        position: absolute;
    }
`

export default TypeContainer
