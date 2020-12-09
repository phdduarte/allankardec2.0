import style from 'styled-components'

const HomeContainer = style.div`
    * {
        padding: 10px;
        justify-content: center;
    }
    h1 {
        font-family: Roboto;
        text-align: center;
        color: ${props => props.theme.colors.primary}
    }
    a div {
        text-align: center;
    }
    a .image-type{
        margin: 0;
        justify-content: center;
    }
`

export default HomeContainer
