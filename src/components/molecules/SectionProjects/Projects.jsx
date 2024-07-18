import { StyledProjects } from './StyledProjects.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import CardProject from '../../atoms/Sections/CardProject';

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Projects = ({color}) => {

	useEffect(() =>{
		AOS.init({duration:"1000"})
	})

	return (
		<StyledProjects id="section1" data-aos="fade-up">
			<TitleSection portfolioData={portfolioData.sectionProjects[0]} color={color}/>
			<div className='gridModify'>
				<CardProject
					projectImage={portfolioData.sectionProjects[1]}
					projectName={portfolioData.sectionProjects[2]}
					githubText={portfolioData.sectionProjects[9]}
					livedemoText={portfolioData.sectionProjects[10]}
					githubLink={portfolioData.sectionProjects[11].LuckyShrubGit}
					demoLink={portfolioData.sectionProjects[11].LuckyShrubDemo}
					color={color}
				/>
				<CardProject
					projectImage={portfolioData.sectionProjects[3]}
					projectName={portfolioData.sectionProjects[4]}
					githubText={portfolioData.sectionProjects[9]}
					livedemoText={portfolioData.sectionProjects[10]}
					githubLink={portfolioData.sectionProjects[11].CarWebsiteGit}
					demoLink={portfolioData.sectionProjects[11].CarWebsiteDemo}
					color={color}
				/>
				<CardProject
					projectImage={portfolioData.sectionProjects[5]}
					projectName={portfolioData.sectionProjects[6]}
					githubText={portfolioData.sectionProjects[9]}
					livedemoText={portfolioData.sectionProjects[10]}
					githubLink={portfolioData.sectionProjects[11].CalculatorGit}
					demoLink={portfolioData.sectionProjects[11].CalculatorDemo}
					color={color}
				/>
				<CardProject
					projectImage={portfolioData.sectionProjects[7]}
					projectName={portfolioData.sectionProjects[8]}
					githubText={portfolioData.sectionProjects[9]}
					livedemoText={portfolioData.sectionProjects[10]}
					githubLink={portfolioData.sectionProjects[11].AgeCalculatorGit}
					demoLink={portfolioData.sectionProjects[11].AgeCalculatorDemo}
					color={color}
				/>
			</div>
		</StyledProjects>
	);
};

export default Projects;
