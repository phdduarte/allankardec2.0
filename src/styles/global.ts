import { createGlobalStyle } from 'styled-components'
import './global.scss'

export default createGlobalStyle`
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
  .Logo {
    padding: 0 14px 0 14px;
  }

  footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 0;
    padding: 36px 5px;
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

  .link-linkPage{
    padding: 15px;
    font-size: 1.3rem;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    background: ${props => props.theme.colors.primary};
  }
/** Link Paginas Links e Pagina de links */
  .link-linkPage a {
    text-decoration: none;
    color: white;
    max-width: 80%;
  }
  .link-linkPage a:hover {
    text-decoration: underline;
  }

  .page-link{
    padding: 0;
    word-wrap: break-word;
  }
  .page-link h1 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.6rem;
    word-break: break-all;
    @media (max-width: 20em){
      font-size: 2rem;
    }
  }
  .page-link .list{
    text-align: left;
  }
  .page-link .list-links {
    word-break: break-word;
    display: block;
    font-size : 1.2rem;
    line-height: 1.6rem;
    line-width: 100%;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .page-link .list-links li {
    margin-bottom: .8rem;
  }
  .page-link a:hover {
      color: dark;
  }

  .align-items-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  /** -------------- Barra de Pesquisa ----------------------- */

  .search-bar {
    padding: 10px;
    background: #333;
  }
  .search-bar a {
    color: white;
    margin-top: 10px;
    transition: all .5s;
  }
  .search-bar a:hover {
    text-decoration: underline;
  }

  .btn, .btn.disabled, .btn:disabled, .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active,
  .show > .btn.dropdown-toggle {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
  .btn:hover, .btn:focus, .btn.focus {
    background-color: ${props => props.theme.colors.primaryLighter};
    border-color: ${props => props.theme.colors.primaryLighter};
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.transparentPrimary};
  }
  
  .btn:not(:disabled):not(.disabled):active:focus, .btn:not(:disabled):not(.disabled).active:focus, .show > .btn.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem 
      ${props => props.theme.colors.transparentPrimary}; 
  }

/** -----------------------------Menu ---------------------------------- */

  .menu {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
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
    @media (max-width: 20em){
      max-width: 130px;
    }
  }
  .menu .navbar-nav .nav-link:hover {
    text-decoration: underline;
  }

/** ------------------------- Slider ----------------------------------- */

/** Tirando os controles do slider */
  a.carousel-control-prev, a.carousel-control-next, ol.carousel-indicators {
    visibility: hidden;
  }
  div .carousel-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    left: 0%;
    width: 100%;
    background: ${props => props.theme.colors.transparentPrimary};
    .carousel-text{
      font-weight: 800;
      text-align: center;
    }
    @media (max-width: 20em){
      padding: 5px;
      height: 1.2rem;
      font-size: 0.6rem;
    }
    @media (min-width: 20em) and (max-width: 25em){
      padding: 6px;
      height: 1.4rem;
      font-size: 0.7rem;
    }
    @media (min-width: 25em) and (max-width:30em) {
      padding: 7px;
      height: 1.6rem;
      font-size: 0.8rem;
    }
    @media (min-width:30em) and (max-width:40em) {
      padding: 8px;
      height: 2rem;
      font-size: 0.9rem;
    }
    @media (min-width:40em) and (max-width:52em) {
      padding: 9px;
      height: 2.5rem;
      font-size: 1.2rem;
    }
    @media (min-width:52em) and (max-width:64em) {
      padding: 10px;
      height: 3.2rem;
      font-size: 1.5rem;
    }
    @media (min-width:64em) {
      padding: 11px;
      height: 3.8rem;
      font-size: 1.8rem;
    }
  }
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
  .red-main{
    background: ${props => props.theme.colors.primary};
    border: 3px solid ${props => props.theme.colors.primary};
  }
  main .content{
    padding: 20px 0;
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
