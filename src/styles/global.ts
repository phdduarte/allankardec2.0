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
  div .carousel-caption {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    bottom 0px;
    left: 0%;
    width: 100%;
    height: 10%;
    background: ${props => props.theme.colors.transparentPrimary};
  }
  .carousel-caption carousel-text{
    font-size: 2.5em;
    font-weight: 800;
    text-align: center;
  }
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
