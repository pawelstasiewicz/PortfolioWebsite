import { StyledNavigationList } from './StyledNavigationList.styled';

const NavigationList = (props) => {
	return (
		<StyledNavigationList>
			{props.navigationData.map((element, index) => {
				if(index !== props.navigationData.length - 1){
					return <li key={index}>{element}</li>
				}else{
					return <img src={element} alt="Moon" key={index}/>
				}
			
			})}
		</StyledNavigationList>
	);
};

export default NavigationList;
