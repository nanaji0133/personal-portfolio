import {
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  mcap_logo,
  cgi_logo,
  uwaterloo_logo,
  cloud_server,
  vit,
  bugsanderrors_logo,
  gym,
  guitar,
  skj,
  code,
  medal,
  roboticarm,
  learning,
  investing,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  SiOracle,
  SiSpringboot,
} from "react-icons/si";

import { 
  TbFileTypeSql,
  TbBrandPowershell,
} from "react-icons/tb";

import { 
  FaNode,
  FaAngular,
  FaVuejs,
  FaJenkins,
} from "react-icons/fa6";

import { 
  FaHardHat, 
  FaRust,
  FaMedal,
  FaGuitar,
} from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink ="https://1drv.ms/b/c/7b99732052807e1d/ESPW7yXKeQdIk1-fNz0YgecB5oZh2XyMHoSGnFVosVqL9Q?e=5qDqNE";
export const repoLink = "";

export const callToAction = "https://www.linkedin.com/in/nanaji-sanka/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Hobbies",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uwaterloo_logo,
    title: "University of Waterloo, Canada",
    degree: "Masters of Engineering",
    duration: "September 2019 - December 2020",
    content1: "Major: Computer Engineering",
    content2: "Conrad School of Business and Entrepreneurship",
  },
  {
    id: "education-2",
    icon: vit,
    title: "Vellore Institute of Technology, India",
    degree: "Bachelors of Technology",
    // duration: "May 2024 - June 2024",
    content1: "Electrical and Computer Engineering",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: medal,
    event: "Employer Awards – CGI Inc.",
    position: "CGI’s employer APPLAUD award for exceptional performance and commitment to company values.",
    // content1: "CGI’s employer APPLAUD award for exceptional performance and commitment to company values.",
    // content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
    // content3: "Coinbase Pool Prize, Base Top 10",
    // article:
    //   "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    // project: "https://devfolio.co/projects/khoj-3336",
    // youtube:
    //   "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-4",
    icon: roboticarm,
    event: "Robotic Arm using Inferential Feedback",
    position: "Designed & Impl a flexible robotic arm - Reducing vibration & tracking error.",
    // content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    // content2: "Top 3 projects using Replit",
    // content3: "1st Runner Up by Amazon Web Services (AWS)",
    // article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-2",
    icon: cloud_server,
    event: "Cloud Native Training by Aptum & MCAP",
    position: "Docker, Kubernetes, container orchestration, microservices design, and cloud-first architectures",
    // content2: "Docker, Kubernetes, container orchestration, microservices design, and cloud-first architectures",
    // content2: "One of Polygon's Best Public Goods",
    // content3: "Best Module on Biconomy SDK",
    // article:
    //   "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    // project: "https://devfolio.co/projects/chargeswap-3527",
    // youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-3",
    icon: learning,
    event: "Full Stack BootCamp Certified - NIIT & CGI Inc.",
    position: "Spring Boot, REST APIs, frontend development, design patterns, & architectural design.",
    // content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    // content2: "",
    // content3: "",
    // article:
    //   "https://www.linkedin.com/posts/mittal-parth_hackathon-winners-web3-activity-7048340759116214272-eJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOa76QB7zljgX8NK4xVSZXi0Z49ETMeC-g",
    // github: "https://github.com/pranav2305/GreenTrust",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-2",
        icon: SiTypescript ,
        name: "TypeScript",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-5",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-6",
        icon: TbFileTypeSql,
        name: "SQL",
      },
      {
        id: "pl-7",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-8",
        icon: DiCss3,
        name: "CSS",
      },
      // TbBrandPowershell
      {
        id: "pl-10",
        icon: TbBrandPowershell,
        name: "Shell",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: FaNode,
        name: "NodeJs",
      },
      {
        id: "f-2",
        icon: FaAngular ,
        name: "AngularJs",
      },
      {
        id: "f-3",
        icon: FaVuejs,
        name: "VueJs",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-6",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-7",
        icon: SiSpringboot ,
        name: "SpringBoot",
      },
      {
        id: "f-8",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-10",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: VscAzure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: FaJenkins,
        name: "Jenkins",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "MCAP, Canada",
    logo: mcap_logo,
    link: "",
    positions: [
      {
        title: "Software Engineer",
        duration: "Nov 2024 - Present",
        content: [
          {
            text: "Building scalable applications for broker, lender, borrower, and customer portals. Shaping solution architecture to support mortgage servicing and streamline enterprise workflows.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "CGI Inc, Canada",
    logo: cgi_logo,
    link: "",
    positions: [
      {
        title: "Senior Application Developer",
        duration: "June 2021 - Oct 2024",
        content: [
          {
            text: "Built regulatory reporting solutions aligned with FINTRAC standards, streamlining compliance workflows and accelerating financial data delivery.",
            link: "",
          },
        ],
      },
      {
        title: "FullStack Developer",
        duration: "Oct 2024 - Nov 2024",
        content: [
          {
            text: "Contributed to the development of a digital wealth portfolio platform, enhancing user experience and operational efficiency for enterprise banking clients.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Bugs And Errors Studio",
    logo: bugsanderrors_logo,
    link: "",
    positions: [
      {
        title: "FullStack Developer",
        duration: "Feb 2020 - May 2021",
        content: [
          {
            text: "Built full-stack solutions for client-based EdTech and social platform apps in a fast-paced freelance environment.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Frontend Developer",
      //   duration: "Feb 2020 - May 2021",
      //   content: [
      //     {
      //       text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "Cloud Integrate Systems Pvt. Ltd",
    logo: cloud_server,
    link: "",
    positions: [
      {
        title: "Software Developer",
        duration: "June 2017 - Dec 2019",
        content: [
          {
            text: "Built and deployed full-stack web applications including an e-commerce platform and payment-integrated services using Java Spring Boot and Angular.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "RailFeast",
    // github: "https://github.com/marcdhi/Khoj",
    link: "https://www.railfeast.com/",
    // image: khoj,
    content:
      "E-catering platform for train passengers, enabling seamless food ordering from approved restaurants across India, with live train schedule updates and reservation tracking.",
    stack: [
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-5",
        icon: SiDjango,
        name: "Django",
      },
    ],
  },
  {
    id: "project-2",
    title: "Binder - Dating App",
    // github: "https://github.com/mittal-parth/kosh-sdk",
    // link: "https://ethglobal.com/showcase/kosh-hk3mp",
    // image: kosh,
    content:
      "Developed the backend for a modern dating app enabling user matching, chat, and profile management based on mutual interests and preferences.",
    stack: [
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-2",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-3",
    title: "Jauhars Class",
    // github: "https://github.com/mittal-parth/polkadot-dev-cli",
    // link: "https://crates.io/crates/polkadot-dev-cli",
    // image: polkadot_dev_cli,
    content:
      "Learning management platform with student and staff portals, course enrollment, push notifications, and secure payment integration",
    stack: [
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-3",
        icon: FaAngular,
        name: "Angular",
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-5",
        icon: SiDjango,
        name: "Django",
      },
    ],
  },
  {
    id: "project-4",
    title: "Portfolio",
    github: "",
    link: "",
    // image: comicify_ai,
    content:
      "Personal portfolio website showcasing my projects, skills, and experience, built with modern web technologies.",
    stack: [
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-3",
        icon: FaAngular,
        name: "Angular",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Investing",
    title: "Long-term investor with a keen interest in equities, market trends, and long-term value creation.",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: investing,
  },
  {
    id: 4,
    organisation: "Digital Marketing - SK Jewellery",
    title: "Focused on driving brand visibility and engagement through strategic online campaigns and analytics.",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: skj,
  },
  {
    id: 5,
    organisation: "LeetCode",
    title: "Consistently sharpening problem-solving skills through algorithmic challenges and data structure mastery.",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: code,
  },
  {
    id: 2,
    organisation: "Fitness & Swimming",
    title: "Lift weights and swim laps to stay energized and focused outside of work.",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: gym,
  },
  {
    id: 3,
    organisation: " Ukulele & Music",
    title: "Play ukulele casually to unwind and spark creativity outside of work.",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: guitar,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/nanaji-sanka/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "http://github.com/nanaji0133",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:nanajisanka5357@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/nanaji_sanka",
  },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "",
  // },
];

// Your professional summary
export const aboutMe = {
    name: "Nanaji Sanka",
    githubUsername: 'nanaji0133',
    tagLine: "Indian roots...Candian vibes. Let's connect on",
    intro: "Passionate Software Developer turning ideas into impact..."
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
