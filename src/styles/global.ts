import { createGlobalStyle } from 'styled-components'
import './global.scss'

export default createGlobalStyle`
  {/* --------- Configuracoes padroes --------- */}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    width: 100vw;
    overflow-x: hidden;
  }

  {/* ------------------ footer ------------------ */}
  footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 0;
    padding: 36px 0px;
    margin: 0;
    text-align: center;
    color: white;
    background: #333;
  }
  footer p {
    margin-bottom: 0;
    vertical-align: middle;
  }
  footer a {
    text-decoration: none;
    color: white;
    transition: all .5s;
  }
  footer a:hover {
    text-decoration: underline;
  }

  {/* --------- Pagina de links --------- */}
  .link-linkPage{
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary};
  }

  .link-linkPage a {
    text-decoration: none;
    color: white;
  }
  .link-linkPage a:hover {
    text-decoration: underline;
  }

  .align-items-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  {/* --------- Barra de Pesquisa --------- */}
  .search-bar {
    padding: 10px;
    background: #333;
  }
  .search-bar a {
    color: white;
    transition: all .5s;
  }
  .search-bar a:hover {
    text-decoration: underline;
  }
  .btn-primary {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
  .btn-primary:hover {
    background-color: ${props => props.theme.colors.primaryLighter};
    border-color: ${props => props.theme.colors.primaryLighter};
  }

  {/* ----------------- MENU ---------------- */}
  .menu {
    padding: 20px;
    display: flex;
    justify-content: center;
    background: ${props => props.theme.colors.primary};
  }
  .menu .navbar-nav {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .menu .navbar-nav .nav-link {
    color: white;
    transition: all .5s;
  }
  .menu .navbar-nav .nav-link:hover {
    text-decoration: underline;
  }
  a.carousel-control-prev, a.carousel-control-next, ol.carousel-indicators {
    visibility: hidden;
  }

  {/* ------------------ SLIDER ------------------ */}
  @media (max-width: 20em){
    div .carousel-caption {
      height: 0.5rem;
      font-size: 0.3rem;
      padding: 5px;
    }
  }
  @media (min-width: 20em) and (max-width: 25em){
    div .carousel-caption {
      height: 0.5rem;
      font-size: 0.4rem;
      padding: 5px;
    }
  }
  @media (min-width: 25em) and (max-width:30em) {
    div .carousel-caption {
      height: 0.45rem;
      font-size: 0.6rem;
      padding: 5px;
    }
  }
  @media (min-width:30em) and (max-width:40em) {
    div .carousel-caption {
      height: 0.625rem;
      font-size: 0.775rem;
    }
  }

  @media (min-width:40em) and (max-width:52em) {
    div .carousel-caption {
      height: 0.75rem;
      font-size: 0.9rem;
    }
  }

  @media (min-width:52em) and (max-width:64em) {
    div .carousel-caption {
      height: 1.0rem;
      font-size: 1.15rem;
    }
  }

  @media (min-width:64em) {
    div .carousel-caption {
      height: 1.25rem;
      font-size: 1.4rem;
    }
  }
  div .carousel-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom 0px;
    left: 0%;
    width: 100%;
    background: ${props => props.theme.colors.transparentPrimary};
  }
  .carousel-caption carousel-text{
    font-weight: 800;
    text-align: center;
  }

  {/* ------------------ CARDS ------------------ */}
  .img-card, .img-text-card {
    text-align: center;
    padding: 5px;
  }
  .cards {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .description-card {
    padding-left: 5px;
  }
  .description-card ul {
    list-style-type: none;
  }
  .title {
    font-family: Roboto;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    padding-bottom: 20px;
  }

  {/* ------------------ ESTILO DA PAGINA ------------------ */}
  .red-main{
    background: ${props => props.theme.colors.primary};
    border: 3px solid ${props => props.theme.colors.primary};
  }
  main .content{
    margin: 10px 30px;
    padding: 20px;
    background: ${props => props.theme.colors.background};
    border-radius: 5px;
  }
  .content-text {
    display: block;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    text-align: center;
    margin-top: -20px;
  }
  .content-text .justify-text {
    text-align: justify;
    margin: 20px 25px;
  }
`
