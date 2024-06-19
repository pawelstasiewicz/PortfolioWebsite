import styled from 'styled-components';
import { portfolioColor } from '../../../assets/PortfolioData';

export const StyledNavigationList = styled.ul`
	position: absolute;
	right: 0;
	top: 60px;
	width: 50%;
	list-style-type: none;
	padding: 0 20px;
	text-align: center;
	background-color: ${portfolioColor.hexGray2};
	z-index: 4;

	opacity: 0;
	transform: translateY(-20px);
	animation: slideDown 0.4s ease-in-out forwards;

	li {
		padding-bottom: 5px;
		margin: 20px 0;
		color: ${portfolioColor.hexWhite};
		font-family: 'Inika';
	}

	img {
		width: 20px;
		margin: 0 auto 10px auto;
	}

	@media (min-width: 768px) {
		display: flex;
		top: 10px;
		background-color: transparent;
		justify-content: space-evenly;

		li {
			color: ${(props) => props.fontcolor};
		}

		img {
			width: 20px;
			margin: 0;
			margin-bottom: 5px;
		}
	}

	@keyframes slideDown {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
