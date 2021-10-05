import emoji from "react-easy-emoji";

export const greetings = {
	name: "Kartik Pathak",
	title: "Hi, I'm Kartik Pathak",
	description:
		" I am a Full Stack Web and Mobile Application Developer. ",
    analogy:"Canvas : Artist :: Web Page : Developer",
	original:"- KP Original",
	emoticon: emoji(" 😀 "), 
	resumeLink: "https://drive.google.com/file/d/10DM-7sgUvfWXcwzxCBKqUysm5GmgtVTC/view?usp=sharing",
};

export const openSource = {
	githubUserName: "KP-MIT",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/kartik.pathak.9/",
	instagram: "https://www.instagram.com/blunt_chill_baked/",
	github: "https://github.com/KP-MIT",
	linkedin: "https://www.linkedin.com/in/developer-kartik-pathak/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"TECH ENTHUSIAST, DEVELOPER AND RESEARCHER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop end-to-end intuitive and interactive web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Application in multiple SPA stacks"
		),
		emoji(
			"⚡ Natural Language Processing "
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};


export const educationInfo = [
	{
		schoolName: "Monash University, Melbourne",
		subHeader: "Master of Science in Information & Technology",
		duration: "Jun 2019 - Aug 2021",
		desc: "Completed Industrial Experience Project with Distinction",
		descBullets: [
			"Summer Research Assistant",
			"Sponsorship Associate - The Eight Bit Club",
		],
	},
	{
		schoolName: "GD Goenka University, Gurugram",
		subHeader: "Bachelor in Computer Science & Engineering",
		duration: "Jul 2014 - Jun 2018",
		desc: "Published 2 Research Papers.",
		descBullets: [
			"Head of Board of Student's Association",
			"9th Rank at National Creativity Aptitude Test",
		],
	},
];

export const experience = [
	{
		role: "Freelance Full Stack Developer",
		company: "Monash University",
		companylogo: "/img/icons/common/monash-university.svg",
		date: " Mar 2021 – Jun 2021",
		desc: "",
		descBullets: [
			"Fire Safe Farm - App - IT for Social Good initiative.",
			"Azure ASP .NET MVC Framework",
		],
	},
	{
		role: "Summer Research Assistant",
		company: "Monash University",
		companylogo: "/img/icons/common/monash-university.svg",
		date: "Nov 2020 – Feb 2021",
		desc: "",
		descBullets: [
			"Automated Sampling, Labeling and Update process for Source Data.",
			"NLP Classifier, BERT/ SVM, Express JS, R Programming",
		]

	},
	{
		role: "Lead Tech Associate",
		company: "Nimai Developers",
		companylogo: "/img/icons/common/nimai-logo.png",
		date: "Jun 2018 – Jun 2019",
		desc: "",
		descBullets: [
			"Software - CRM Modules, Inventory Management and staff Dashboard",
			"Redesigned visual elements and Architecture for a live website.",
		]
	},
];

export const projects = [
	
	{
		name: "AI News Assistant",
		desc: "React | Material UI ",
		github: "https://github.com/KP-MIT/project_news_alan_ai-master",
		link: "https://kp-mit.github.io/project_news_alan_ai-master/",
	},
	{
		name: "Web App - Fire Safe Farms",
		desc: "ASP .NET MVC based light Web App focused on farm safety from bushfire.",
		github: "https://github.com/KP-MIT/Fire-Safe-Farms-Monash-IE-Iteration-3",
	},
	{
		name: "AI Air Painter",
		desc: "Python | OpenCV | Google Mediapipe",
		github: "https://github.com/KP-MIT/OpenCV_air_paint",
	},
	{
		name: "React Native Uber Clone Project",
		desc: "React Native | Redux | Tailwind CSS",
		github: "https://github.com/KP-MIT/Native-Uber-Clone",
		link: "https://expo.dev/@kartik_pathak/uber-clone",
	},
	
];

export const internship = [
	{
		role: "Java ML Engineer",
		company: "Boston Analytics",
		companylogo: "/img/icons/common/boston-logo.jpg",
		date: " Mar 2021 – Jun 2021",
		desc: "",
		descBullets: [
			" Stanford Core NLP, JAVA EJB, My SQL Server and workbench",
			" Swift, React Native, Neo 4j, Apache Solr, NoSQL, Unix",
		],
	},
	{
		role: "Data Science Intern",
		company: "Prakshep.ai",
		companylogo: "/img/icons/common/prakshep.jfif",
		date: "Nov 2020 – Feb 2021",
		desc: "",
		descBullets: [
			"Python Web Scraping - Flask API, Beautiful Soup, Selenium",
			"Android Studio, image processing, satellite imaging ",
		],
	},
];