import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ashiq Hussain",
  logo: "/hero1.png",
  email: "tim@witzdam.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/mdashiqueh",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ashiq Hussain",
    description:
      "a passionate Frontend Developer and Graphic Designer, crafting visually stunning, user-friendly websites and impactful designs that bring ideas to life with clean code and creative aesthetics.",
    image: identity.logo,
  },
  role: "Proffesor & Developer",
  description:
    "Hello, I'm Md Ashique Hussain, a passionate Frontend Developer and Graphic Designer",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ashiq Hussain",
    description: "passionate Frontend Developer and Graphic Designer",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Ashiq Hussain, an assistant proffesor and passionate Frontend Developer and Graphic Designer.
<br/><br/>
  I craft visually stunning, user-friendly websites<br/><br/>
my designs bring ideas to life with clean code and creative aesthetics`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked at Institutions and with a variety of technologies and tools to build cool things.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Assistant Professor",
          image: "/lords.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2023 - Present",
      },
      {
        title: "Front-End Developer Intern",
        company: {
          name: "NullClass",
          image: "/nullclass.png",
          url: "https://github.com/TimWitzdam",
        },
        date: "2022 - 2023",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ashiq Hussain",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Personal Portfolio",
      description: "Developed a personal portfolio website to showcase my skills, projects, and experiences.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
