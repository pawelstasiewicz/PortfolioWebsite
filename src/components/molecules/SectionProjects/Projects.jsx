import { StyledProjects } from './StyledProjects.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import CardProject from '../../atoms/Sections/CardProject';

const Projects = () => {
	return (
		<StyledProjects>
			<TitleSection portfolioData={portfolioData.sectionProjects[0]} />
			<CardProject
				projectImage={portfolioData.sectionProjects[1]}
				projectName={portfolioData.sectionProjects[2]}
                githubText={portfolioData.sectionProjects[7]}
                livedemoText={portfolioData.sectionProjects[8]}
                githubLink={portfolioData.sectionProjects[9].LuckyShrubGit}
                demoLink={portfolioData.sectionProjects[9].LuckyShrubDemo}
			/>
			<CardProject
				projectImage={portfolioData.sectionProjects[3]}
				projectName={portfolioData.sectionProjects[4]}
                githubText={portfolioData.sectionProjects[7]}
                livedemoText={portfolioData.sectionProjects[8]}
                githubLink={portfolioData.sectionProjects[9].CarWebsiteGit}
                demoLink={portfolioData.sectionProjects[9].CarWebsiteDemo}
			/>
			<CardProject
				projectImage={portfolioData.sectionProjects[5]}
				projectName={portfolioData.sectionProjects[6]}
                githubText={portfolioData.sectionProjects[7]}
                livedemoText={portfolioData.sectionProjects[8]}
                githubLink={portfolioData.sectionProjects[9].AgeCalculatorGit}
                demoLink={portfolioData.sectionProjects[9].AgeCalculatorDemo}
			/>
		</StyledProjects>
	);
};

export default Projects;
