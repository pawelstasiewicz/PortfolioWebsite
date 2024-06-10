import { StyledNavigationList } from './StyledNavigationList.styled';

const NavigationList = (props) => {
	return (
		<StyledNavigationList>
			{props.navigationData.map((element, index) => {
				return <li key={index}>{element}</li>;
			})}
		</StyledNavigationList>
	);
};

export default NavigationList;
