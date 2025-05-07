import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Maxfield Gaj",
  initials: "MG",
  location: "Providence, RI, USA",
  locationLink: "https://www.google.com/maps/place/Providence",
  about:
    "Product-minded Full Stack Engineer experienced in building teams and apps from the ground up.",
  summary:
    "I am a full stack engineer with years of startup experience, skilled in a number of technologies, always focused on creating the best outcome for the user.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C5603AQFQR0zKtxdluQ/profile-displayphoto-shrink_200_200/0/1652999260831?e=1723075200&v=beta&t=Yx63C3QedR4jr70z6yZAhLj3HFWDoX6o3Qbez_C34Y0",
  contact: {
    email: "maxfieldgaj@gmail.com",
    // tel: "+15124614272",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/maxfieldegaj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maxfieldgaj",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Austin Coding Academy",
      degree:
        "Certificate in full stack development with HTML, CSS, JavaScript, and C#",
      start: "2017",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Form Bio",
      link: "https://formbio.com",
      badges: ["Remote"],
      title: "Senior Full Stack Engineer II/III & Tech Lead",
      start: "2022",
      end: null,
      description:
        "Serving as a technology leader and full stack developer. Technologies: React, TypeScript, Node.js, Go, Terraform, GCP",
    },
    {
      company: "Colossal",
      link: "https://colossal.com",
      badges: ["Remote"],
      title: "Senior Full Stack Engineer",
      start: "2021",
      end: "2022",
      description:
        "Initialized the software platform and team that later spun out to be Form Bio by developing our basis for a Postgres database, Go API, and NextJS frontends. Led team exercises like Standards & Best Practices meetings, and established organization processes including the Frontend Engineer Interview Process, Release Process, and code Style Guides. Technologies: React, TypeScript, Node.js, Go, Terraform, GCP",
    },
    {
      company: "Supply Drop",
      link: "https://supplydrop.com",
      badges: ["Hybrid"],
      title: "Full Stack Engineer",
      start: "2019",
      end: "2021",
      description:
        "Led the frontend development for the Seed to Series A stage company, developed an in-house Slack customer service integration for inbound-outbound SMS. Technologies: JavaScript, Kotlin, AWS",
    },
    {
      company: "Broadway Lab",
      link: "https://www.linkedin.com/company/broadwaylab/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2018",
      end: "2019",
      description:
        "Led the creation of an automated test suite for one client, enabled a mobile app to scale internationally for another, and led the full stack development for what became Supply Drop. Technologies: JavaScript, C#, Ruby, AWS, GCP",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Go",
    "Kotlin",
    "C#",
    "AWS",
    "GCP",
  ],
} as const;
