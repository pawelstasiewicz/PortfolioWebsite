import styled from 'styled-components';
import { portfolioColor } from './../../../assets/PortfolioData';

export const StyledLoadingScreen = styled.div`
	@keyframes slideUp {
		0% {
			top: 0;
		}
		100% {
			top: -100%;
			opacity: 0;
		}
	}

	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${portfolioColor.hexWhite};
	animation: slideUp 1s forwards linear;
	animation-delay: 10s;
	z-index: 10;
`;
