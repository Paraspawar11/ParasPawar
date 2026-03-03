import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Paras",
  lastName: "Pawar",
  name: `Paras Pawar`,
  role: "Developer @ NexShell",
  avatar: "/images/avatar.png",
  email: "nexshellofficial@proton.me",
  location: "Thane, Maharashtra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NexShell-Official",
    essential: true,
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@nexshell",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/its.paraspawar?igsh=cWJzZ2RpMjIy",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/paraspawardev",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.svg",
  label: "Home",
  title: `${person.name} | NexShell`,
  description: `Developer building private, local-first software at NexShell. Creator of NexKora-AI.`,
  headline: <>Building private AI for everyone</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">NexKora-AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Flagship Project
        </Text>
      </Row>
    ),
    href: "/work/nexkora",
  },
  subline: (
    <>
    I'm Paras, a developer at <Text as="span" size="xl" weight="strong">NexShell</Text>, building private voice AI <br /> and local-first software.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Paras is a developer and 12th-grade student based in India.
        He is the founder of <strong>NexShell</strong>, a brand focused on private, local-first software
        solutions. His work centers on building privacy-focused AI tools and high-performance applications
        that prioritize local control and user sovereignty.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "NexKora-AI",
        timeframe: "2025 - Present",
        role: "Lead Developer & Founder",
        achievements: [
          <>
            Currently developing an open-source, private voice intelligence engine for automated calling and local AI
            automation (Status: Under Development, March 2026).
          </>,
          <>
            Implementing secure, spoofed API layers with hybrid intelligence architecture for
            seamless voice interactions without cloud dependency.
          </>,
          <>
            Designing Fedora-optimized tools and cross-platform solutions for Windows, Mac,
            Android, and Linux.
          </>,
        ],
        images: [
          {
            src: "/images/projects/nexkora-banner.png",
            alt: "NexKora-AI Voice Intelligence Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "NexShell",
        timeframe: "2025 - Present",
        role: "Founder & Developer",
        achievements: [
          <>
            Founded NexShell as a parent brand for private, local-first software solutions
            focused on user sovereignty and privacy.
          </>,
          <>
            Developing clean, high-performance code with modern CSS and cross-platform
            compatibility across all major operating systems.
          </>,
          <>
            Creating privacy-focused design patterns that eliminate external trackers and
            heavy cloud dependencies.
          </>,
        ],
        images: [
          {
            src: "/images/projects/nexshell/cover-01.png",
            alt: "NexShell Brand Identity",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Higher Secondary Education",
        description: <>Currently in 12th grade, studying with focus on technology and entrepreneurship.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Local-First Development",
        description: (
          <>Building privacy-focused software with local control and minimal cloud dependency.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [
          {
            src: "/images/skills/local-first.svg",
            alt: "Local-First Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI & Voice Intelligence",
        description: (
          <>Developing private voice AI systems with hybrid intelligence architecture.</>
        ),
        tags: [
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [
          {
            src: "/images/skills/voice-ai.svg",
            alt: "Voice AI Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cross-Platform Development",
        description: (
          <>Creating high-performance applications for Windows, Mac, Android, and Linux.</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [
          {
            src: "/images/skills/cross-platform.svg",
            alt: "Cross-Platform Development",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Gallery images
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
