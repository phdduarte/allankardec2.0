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

  #header nav {
    background: #333;    
  }
  #header nav a {
    color: white;
    transition: all .5s;
  }
  #header nav a:hover {
    text-decoration: underline;
  }
`
