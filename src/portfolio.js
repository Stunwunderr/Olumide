const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Omobukola Olumide | Portfolio",
  description:
    "A data geek with a startup obsession. I'm all about crunching numbers, finding patterns, and making data dance to the startup beat. Let's rock that data!",
  og: {
    title: "Omobukola Olumide | Portfolio",
    type: "website",
    url: "https://olumideomobukola.vercel.app",
  },
};
//Web developer
const developer = {
  sub: "Codewunder",
  link: "https://codewunder.vercel.app",
}
//Home Page
const greeting = {
  title: "Welcome!",
  sub: "Omobukola Olumide",
  logo_name: "Omobukola Olumide",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Facebook",
      iconifyClassname: "simple-icons:facebook",
      style: {
        color: "blue",
      },
      profileLink: "https://facebook.com/",
    },
    {
      siteName: "Instagram",
      iconifyClassname: "simple-icons:instagram",
      style: {
        color: "#dd2a7b",
      },
      profileLink: "https://www.instagram.com/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/",
    },   
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in crafting scalable, production-ready analytical solutions for diverse data analysis and statistical scenarios", 
        "⚡ Skilled in utilizing Computer Vision through OpenCV and executing NLP initiatives, including T5-Transformer and OpenAI applications",
        "⚡ Extensive experience in proficiently handling Data Cleaning, processing, and comprehensive analysis using Pandas, Tableau, and PowerBI",
        "⚡ Familiar with Text-to-speech encoding/decoding (speech synthesis) and Voice Cloning for robust data analysis applications.",
      ],
      softwareSkills: [
        
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
      ],
    },
    {
      title: "Technical Proficiency",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in preparing raw data for analysis by identifying and addressing missing values, outliers, and inconsistencies, ensuring the data is accurate and reliable.",
        "⚡ Skilled in applying statistical techniques, hypothesis testing, and regression analysis to derive meaningful insights and identify patterns within the data. ",
        "⚡ Experienced in creating effective visual representations of data using tools like Tableau, matplotlib, or ggplot, enabling clear communication of findings to both technical and non-technical audiences.",
      ],
      softwareSkills: [
       {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },      
      ],
    },
    {
      title: "Problem Solving",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in identifying and dissecting complex data challenges, utilizing statistical and machine learning techniques for insights.",
        "⚡ Experienced in cleaning and transforming data, handling missing values, and optimizing features for accurate analysis. ",
        "⚡ Able to convey findings effectively, using data visualization tools to bridge the gap between technical and non-technical stakeholders.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "My Portfolio",
  description:
  "Explore my data analysis projects that showcase insights, visualizations, and actionable recommendations across diverse domains.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Professional Experience"],
    data: [
      {
        title: "Data Analyst",
        subtitle: "NeoDocto Inc, Lagos State, Nigeria",
        date: "August 2022 - January 2023",
        content: [
          "Analyzed large datasets to extract valuable insights and trends.",
          "Created clear and informative data visualizations and reports.",
          "Collaborated with teams to define data requirements for projects.",
          "Ensured data accuracy, quality, and consistency in reporting.",
          "Contributed to data-driven decision-making discussions.",
        ],
      },
      {
        title: "Data Analyst",
        subtitle: "Freelance",
        date: "April 2021 - June 2022",
        content: [
          "Gathered and organized relevant data from various sources, ensuring accuracy and consistency to create a solid foundation for analysis.",
          "Applied statistical techniques to identify trends, patterns, and insights within the data, providing valuable information for decision-making.",
          "Created meaningful and informative visualizations, such as charts, graphs, and dashboards, to effectively communicate findings to clients.",
          "Developed predictive models using machine learning techniques to forecast future trends, enabling clients to make proactive business decisions.",
          "Prepared comprehensive and actionable reports, summarizing key findings, recommendations, and actionable insights to help clients leverage data for strategic purposes.",          
        ],
      },
        
      {
        title: "Loss Control Manager",
        subtitle: "Addide Store",
        date: "January 2015 - January 2016",
        content: [
          "Identified and evaluated potential risks across various aspects of the organization.",
          "Developed and implemented strategies to prevent accidents, theft, and other sources of loss.",
          "Created and maintained comprehensive safety protocols and emergency response plans.",
          "Conducted thorough investigations into incidents, accidents, and losses, and recommended improvements.",
          "Worked with different departments to implement loss control measures and fostered a culture of safety.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Educational Journey"],
      data: [
        {
          title: "Bachelor of Science in Civil and Environmental Engineering",
          subtitle: "University of Lagos, Akoka, Lagos.",
          date: "2017 - 2022",
          content: ["Relevant Coursework: Statistics for Engineers, Numerical Analysis, Transportation Engineering and Traffic Analysis, Environmental Engineering"],
        },
        {
          title: "West African Senior School Certificate (WASSCE) ",
          subtitle: "Timi Comprehensive College, Lagos",
          date: "2010 - 2016",
          content: [
            "Major: Science",
            "Achieved consistent top grades in science-related subjects, Engaged in science-focused extracurricular activities"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#135/854 in Summer Analytics Kaggle Competition by IITG",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Young African Leaders Initiative",
            "Financial Modeling and Valuation Analyst [FMVCA] at Corporate Financial Institute.",
            "Google Analyst & Consumer Badge by Coursera",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Excel Fundamentals - Formulas for Finance",
      subtitle: "Corporate Financial Institute",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1GIkddfb2VxBAjzSSt1koROb2-EyskxIO/view?usp=drive_link",
      alt_name: "Corporate Financial Institute",
      color_code: "#000000",
    },
    {
      title: "Data Analysis with R Programming",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://drive.google.com/file/d/13aVvyb4LB717FXTF1RBnWlqeL17-suZ0/view?usp=drive_link",
      alt_name: "Data Analysis with R Programming",
      color_code: "#000000",
    },
    {
      title: "Google Data Analytics",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1BvxiR2IqlJ8moZoHvQRHGFTfUkc28Nff/view?usp=drive_link",
      alt_name: "Google Data Analytics",
      color_code: "#000000",
    },
    {
      title: "Jobberman Soft-Skills Training",
      subtitle: "Jobberman",
      logo_path: "datacamp-01.png",
      certificate_link:
        "jobberman.jpg",
      alt_name: "Jobberman",
      color_code: "#000000",
    },
    {
      title: "Data Analytics",
      subtitle: "Forage",
      logo_path: "ineuron-01.png",
      certificate_link:
        "forage.pdf",
      alt_name: "Forage",
      color_code: "#000000",
    },
    {
      title: "Introduction to IoT",
      subtitle: "CISCO",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1CgZWVv0wOXuIavY0dZ7RXdhmYnCsbpqL/view?usp=drive_link",
      alt_name: "CISCO",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Catch me on nearly every social media channel, serving up professional prowess with the swiftness of a Silicon Valley express train. Ping me your queries, and I'll conjure up insightful replies within 24 hours, wielding my expertise in the realms of ML, AI, React, Cloud, and the enigmatic world of Opensource.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lagos, Nigeria",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234812345678",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/olumide-omobukola",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:omobukolaolumide@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  developer,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
