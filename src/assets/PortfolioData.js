// import { AgeCalculator } from './img/AgeCalculator';
// import { CarWebsite } from './img/CarWebsite';
// import { LuckyShrub } from './img/LuckyShrub';
import moon from './moon-regular.svg'
import github from './github.svg'
import linkedIn from './linkedin.svg'
import profilePicture from './img/ProfilePicture.png'
import envelopeRegular from './envelope-regular.svg'

export const portfolioData = {
	nav: ['Pawel Stasiewicz', 'About Me', 'Projects', 'Contact', moon],
	header: [
		"Hello, I'm",
		'Pawel Stasiewicz',
		'Junior Frontend Developer',
		profilePicture,
		github,
		linkedIn,
		envelopeRegular,
		'Download CV',
	],
	sectionAbout: [
		'Education',
		'2022 - 2023',
		'Postgraduate Studies - Collegium Da Vinci in Poznań',
		'Frontend Developer course of study',
		'2017 - 2020',
		'State Higher Vocational School in Koszalin',
		'National Security course of study',
		'I have completed postgraduate studies in frontend development and I am currently seeking my first job in the IT industry. I have dedicated a lot of time to studying programming materials, which has turned it into my main hobby. I am willing to constantly expand my knowledge and learn new technologies.',
	],
	sectionProects: [
		// LuckyShrub,
		'Lucky Shrub',
		// CarWebsite,
		'Car Website',
		// AgeCalculator,
		'Age Calculator',
		'GitHub',
		'Live Demo',
	],
	sectionContact: ['pst357357@gmail.com', 'LinkedIn'],
};

export const portfolioColor = {
	hexGray1: '#303030', // color for nav elements, h1 text in header, icon in header, section title, names of schools, text in about me, borders, names of projects, text in projects buttons, all elements in contact
	hexGray2: '#4f4f4f', // color in header h2 elements, button text in header, education in about me
	hexGray3: '#868686', // color date in education
	hexWhite: '#fbfbfb', //background color
};

export const portfolioLinks = {
	gitHubLink: 'https://github.com/pawelstasiewicz',
	linkedInLink: 'https://www.linkedin.com/in/paweł-stasiewicz-10132b1b8/',
	envelope: 'pst357357@gmail.com',
}

