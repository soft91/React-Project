import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
		body{
			padding: 0;
			margin: 0;
			font-family: 'Noto Sans KR', sans-serif;
		};

		@-ms-viewport {
			width: device-width;
		}

		@media only screen and (min-device-width: 320px) {
			html {
				font-size: 9px;
			}
		}

		@media only screen and (min-device-width: 360px) {
			html {
				font-size: 10px;
			}
		}

		@media only screen and (min-device-width: 375px) {
			html {
				font-size: 10.4167px;
			}
		}

		@media only screen and (min-device-width: 384px) {
			html {
				font-size: 10.6667px;
			}
		}

		@media only screen and (min-device-width: 412px) {
			html {
				font-size: 11.4444px;
			}
		}

		@media only screen and (min-device-width: 414px) {
			html {
				font-size: 11.5px;
			}
		}

		@media only screen and (min-device-width: 480px) {
			html {
				font-size: 13.3333px;
			}
		}

		@media only screen and (min-device-width: 767px) {
			html {
				font-size: 10px;
			}
		}

		@media only screen and (min-device-width: 991px) {
			html {
				font-size: 10px;
			}
		}
		@media only screen and (min-device-width: 1199px) {
			html {
				font-size: 10px;
			}
		}
		@media only screen and (min-device-width: 1200px) {
			html {
				font-size: 10px;
			}
		}

`;

export default GlobalStyle;
