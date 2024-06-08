import styled from 'styled-components';
import { portfolioColor } from './../../../assets/PortfolioData';

export const StyledLoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${portfolioColor.hexWhite}; 
`;