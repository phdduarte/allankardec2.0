import style from 'styled-components'

const LinksContainer = style.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h3 {

     font-size: 25 px;
     color: ${props => props.theme.colors.text};
     
}
div {
    
    
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.5;
    background-color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size : 20 px;
    color: black;
    justify-content: center;
    text-align: center;
    
}





`
export const AllLinksContainer = style.div`
    * {
        width: 100%:
        display: flex;
        justify-content: center;
        text-align: center;
        position: absolute;
    }
`

export default LinksContainer
