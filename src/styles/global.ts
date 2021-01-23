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
    border: 0;
    padding: 36px 5px;
    margin: 0;
    color: ${props => props.theme.colors.textLighter};
    a {
      color: ${props => props.theme.colors.textLighter};
      text-decoration: none;
      transition: all .5s;
    }
    a:hover {
      text-decoration: underline;
    }
  }

  {/* --------- Pagina de links --------- */}
  .link-linkPage{
    padding: 12px 0;
    font-size: 1.3rem;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${props => props.theme.colors.primary};
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .page-link{
    padding: 0;
    word-wrap: break-word;
    h1 {
      word-break: break-all;
      @media (max-width: 20em){
        font-size: 2rem;
      }
    }
    .list{
      text-align: left;
    }
    .list-links {
      word-break: break-word;
      display: block;
      font-size : 1rem;
      line-height: 2.0em;
      line-width: 100%;
      letter-spacing: 2px;
      text-transform: uppercase;
      list-style: square inside url("assets/img/pointer/pointing-right.png");
    }
    a:hover {
        color: dark;
    }
  }

  {/* ------------------------------------ */}
  .align-items-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .bg-grey {
    background: ${props => props.theme.colors.grey};
  }
  .text-center {
    text-align: center;
  }

  h2, h3, span.email, .word-wrap {
    word-wrap: break-word;
  }

  {/* --------- Barra de Pesquisa --------- */}
  .search-bar {
    padding: 10px;
    a {
      color: white;
      transition: all .5s;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .btn-primary, .btn-primary.disabled, .btn-primary:disabled, .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
  .btn-primary:hover, .btn-primary:focus, .btn-primary.focus {
    background-color: ${props => props.theme.colors.primaryLighter};
    border-color: ${props => props.theme.colors.primaryLighter};
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.transparentPrimary};
  }
  
  .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem 
      ${props => props.theme.colors.transparentPrimary}; 
  }

  {/* ----------------- MENU ---------------- */}
  .menu {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    background: ${props => props.theme.colors.primary};
    .navbar-nav {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      .nav-link {
        color: white;
        transition: all .5s;
        @media (max-width: 20em){
          max-width: 130px;
        }
      }
      .nav-link:hover {
        text-decoration: underline;
      }
    }
  }
  
  {/* ------------------ SLIDER ------------------ */}
  a.carousel-control-prev, a.carousel-control-next, ol.carousel-indicators {
    visibility: hidden;
  }
  
  div .carousel-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom 0px;
    left: 0%;
    width: 100%;
    background: ${props => props.theme.colors.transparentPrimary};
    carousel-text{
      font-weight: 800;
      text-align: center;
    }
    @media (max-width: 20em){
      padding: 5px;
      height: 0.5rem;
      font-size: 0.3rem;
    }
    @media (min-width: 20em) and (max-width: 25em){
      padding: 6px;
      height: 0.5rem;
      font-size: 0.4rem;
    }
    @media (min-width: 25em) and (max-width:30em) {
      padding: 7px;
      height: 0.45rem;
      font-size: 0.6rem;
    }
    @media (min-width:30em) and (max-width:40em) {
      padding: 8px;
      height: 0.625rem;
      font-size: 0.775rem;
    }
    @media (min-width:40em) and (max-width:52em) {
      padding: 9px;
      height: 0.75rem;
      font-size: 0.9rem;
    }
    @media (min-width:52em) and (max-width:64em) {
      padding: 10px;
      height: 1.0rem;
      font-size: 1.15rem;
    }
    @media (min-width:64em) {
      padding: 11px;
      height: 1.25rem;
      font-size: 1.4rem;
    }
  }
  

  {/* ------------------ CARDS ------------------ */}
  .img-card, .img-text-card {
    text-align: center;
    padding: 5px;
  }
  .img-document-card {
    transition: transform .2s;
  }
  .img-document-card:hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2); 
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
    padding: 5px;
    text-align: center;
    margin: 20px 25px;
  }
  .justify-text, .content-text {
    text-align: justify;
  }
  span.email {
    margin-left: 4px;
  }
`
