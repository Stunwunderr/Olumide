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
    url: "https://olumideportfolio.netlify.app",
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
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/",
    },
    {
      siteName: "Facebook",
      iconifyClassname: "simple-icons:facebook",
      style: {
        color: "#4267B2",
      },
      profileLink: "https://www.facebook.com/profile.php?id=100005058017746&mibextid=2JQ9oc",
    },
    {
      siteName: "Instagram",
      iconifyClassname: "simple-icons:instagram",
      style: {
        color: "#dd2a7b",
      },
      profileLink: "https://instagram.com/omobukolaolumide?igshid=MjEwN2IyYWYwYw==",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/olumide-omobukola",
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
          skillName: "Excel",
          fontAwesomeClassname: "ion-logo-excel",
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
          skillName: "SQL",
          fontAwesomeClassname: "ion-logo-sql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PowerBi",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "f6d958",
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
          skillName: "SSMS",
          fontAwesomeClassname: "logos-ssms",
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
      title: "Top 250 IMDB Movies",
      img_path: "movie.gif",
      description:
        "The goal of this project is to give you practical Knowledge on Budgets,Money made from Movies,Writers and so on in the IMDB movie industry as a data analyst.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "PowerBi",
          color: "#820032",
        },
        
      ],
      link: "https://medium.com/@omobukolaolumide/top-250-imdb-movies-edc17e9d8134",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Sales Analysis",
      img_path: "sales.gif",
      description:
        "The goal is to answer the right questions that will help the company to make the right decisions.",
      tags: [      
        {
          lang: "Excel",
          color: "#004782",
        },
        {
          lang: "PowerBi",
          color: "#c47206",
        },        
      ],
      link: "https://medium.com/@omobukolaolumide/goals-13a6044c7f2e",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Nothwind Traders Analysis",
      img_path: "traders.gif",
      description:
        "The purpose of this dashboard is to provide a quick and comprehensive understanding of the company's performance in key areas.",
      tags: [        
        {
          lang: "SQL",
          color: "#8700b0",
        },
        {
          lang: "PowerBi",
          color: "#c47206",
        },
      ],
      link: "https://medium.com/@omobukolaolumide/northwind-traders-99a5243da9a9",
      code: "",
      linkcolor: "white",
    },
    {
      title: "SQL Covid 19 Analysis",
      img_path: "covid.gif",
      description:
        "Explored COVID-19 data using SQL to uncover trends, regional variations, and testing correlations. Presented insights with SQL-generated visualizations.",
      tags: [
        {
          lang: "Excel",
          color: "red",
        },
        {
          lang: "SQL",
          color: "#ff4b4b",
        },
      ],
      link: "https://medium.com/@omobukolaolumide/how-hard-is-sql-dcad0f6a893b",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Excel Projects",
      img_path: "excel.gif",
      description:
        "Demonstrated Excel proficiency through sales analysis, identifying top products and financial health assessment for a startup using financial statements.",
      tags: [
        {
          lang: "Excel",
          color: "red",
        },
      ],
      link: "https://medium.com/@omobukolaolumide/sales-analysis-193d78d45cc7",
      code: "",
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
      title: ["Achivements"],
      data: [     
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
  ],
};

//certificate cards
const certifications = {
  certifications: [
  
    {
      title: "Financial Modelling and Valuation Analyst ",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://drive.google.com/file/d/1GIkddfb2VxBAjzSSt1koROb2-EyskxIO/view?usp=drive_link",
      alt_name: "Corporate Financial Institute",
      color_code: "#000000",
    },
    {
      title: "Excel Fundamentals - Formulas for Finance",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://drive.google.com/file/d/1XSMt67pqAy8hX_AfHvCd7t9O_UCslQM1/view?usp=drive_link",
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
      title: "Budgeting and Forecasting",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/60222199",
      alt_name: "Corporate Financial Institute",
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
      title: "Tableau Fundamentals",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65642903",
      alt_name: "Corporate Financial Institute",
      color_code: "#000000",
    },
    {
      title: "Jobberman Soft-Skills Training",
      subtitle: "Jobberman",
      logo_path: "jobberman.png",
      certificate_link:
        "https://drive.google.com/file/d/1g_07SMBXv6cApgbbvsjh6FemSNQzzcZ5/view?usp=drive_link",
      alt_name: "Jobberman",
      color_code: "#000000",
    },
    {
      title: "SQL Fundamentals",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65646408",
      alt_name: "Corporate Financial Institute",
      color_code: "#000000",
    },
    {
      title: "Data Analytics",
      subtitle: "Forage",
      logo_path: "forage.png",
      certificate_link:
        "https://drive.google.com/file/d/1QjA4PzibKt-L__l3vhNbrfv4CHEhAmqd/view?usp=drive_link",
      alt_name: "Forage",
      color_code: "#000000",
    },
    {
      title: "Power BI Financial Statements",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65641773",
      alt_name: "Corporate Financial Institute",
      color_code: "#000000",
    },

    {
      title: "Introduction to IoT",
      subtitle: "CISCO",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1CgZWVv0wOXuIavY0dZ7RXdhmYnCsbpqL/view?usp=drive_link",
      alt_name: "CISCO",
      color_code: "#000000",
    },
    {
      title: "High Dimensional Data Analytics",
      subtitle: "Havard University Powered By Edx",
      logo_path: "harvard.png",
      certificate_link:
        "",
      alt_name: "Havard University",
      color_code: "#000000",
    },
    {
      title: "Python Fundamentals",
      subtitle: "Corporate Financial Institute",
      logo_path: "cfi.png",
      certificate_link:
        "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65622718",
      alt_name: "Corporate Financial Institute",
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
    subtitle: "+234 903 177 3251",
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
