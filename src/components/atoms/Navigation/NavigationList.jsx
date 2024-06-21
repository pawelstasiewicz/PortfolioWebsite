import { StyledNavigationList } from './StyledNavigationList.styled';
import { portfolioColor } from '../../../assets/PortfolioData';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-scroll';

const NavigationList = (props) => {
	const [isDarkMode, setIsDarkMode] = useState(props.color);

	function handleClick() {
		setIsDarkMode(!isDarkMode);
		props.onMoonClick();
	}

	return (
		<StyledNavigationList
			fontcolor={
				props.color ? portfolioColor.hexGray1 : portfolioColor.hexWhite
			}
		>
			{props.navigationData.map((element, index) => {
				if (index !== props.navigationData.length - 1) {
					return (
						<li key={index}>
							<Link
								to={`section${index}`}
								spy={true}
								smooth={true}
								offset={-200}
								duration={500}
							>
								{element}
							</Link>
						</li>
					);
				} else if (index === props.navigationData.length - 1) {
					if (isDarkMode === true) {
						return (
							<img
								src={element[0]}
								alt='Moon'
								key={index}
								onClick={handleClick}
							/>
						);
					} else if (isDarkMode === false) {
						return (
							<img
								src={element[1]}
								alt='Moon'
								key={index}
								onClick={handleClick}
							/>
						);
					}
				}
			})}
		</StyledNavigationList>
	);
};

export default NavigationList;
