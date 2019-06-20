import { createGlobalStyle } from 'styled-components'
import burbank from 'app/ressources/fonts/Burbank.ttf'

const GlobalStyle = createGlobalStyle`
	*, *:before, *:after {
  	box-sizing: border-box;
	}	

	html, body, #root {
		height: 100%;
		font-family: Arial, serif;
	}
	
	#root {
	  background-color: #f0f0f0;
	}

	@font-face {
    font-family: 'burbank';
    src: url(${burbank}) format('truetype');
    font-weight: normal;
    font-style: normal;
	}`

export default GlobalStyle
