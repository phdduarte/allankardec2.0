import { createGlobalStyle } from 'styled-components'

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
  }
  #footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 10vh;
    border: 0;
    padding: 0;
    margin: 0;
    text-align: center;
    color: white;
    background: #333;
  }
  #footer p {
    margin-bottom: 0;
    vertical-align: middle;
  }
  #footer a {
    text-decoration: none;
    color: white;
    transition: all .5s;
  }
  #footer a:hover {
    text-decoration: underline;
  }

  #links{
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;    
    height: 10vh;
    background: ${props => props.theme.colors.primary};
  }

  #links a {
    text-decoration: none;
    color: white;
  }
  #links a:hover {
    text-decoration: underline;
  }

  #header #search-bar {
    height: 10vh;
    background: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  #header a {
    color: white;
    transition: all .5s;
  }
  #header a:hover {
    text-decoration: underline;
  }

  #menu {
    height: 15vh;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
    margin-top: 10px;
  }
  #menu a {
    color: white;
  }
  #menu a:hover {
    text-decoration: underline;
  }

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
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
