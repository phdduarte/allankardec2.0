import style from 'styled-components'

const SliderContainer = style.div`
    a.carousel-control-prev, a.carousel-control-next, ol.carousel-indicators {
        visibility: hidden;
    }
    div .carousel-caption {
        left: 0%;
        bottom 0px;
        width: 100vw;
        height: 1.3em;
        background: ${props => props.theme.colors.primary};
        position: relative;
    }
    div .carousel-caption span {
        position: absolute;
        top: 50%;
        right: 30%;
        transform: translate(-50%, -50%) 
    }
`
export default SliderContainer
