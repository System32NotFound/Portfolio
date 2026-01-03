export const projects = [
{
  slug: "portfolio-website",
  title: "Personal Portfolio Website",
  subtitle: "React, Tailwind CSS, Framer Motion",
  year: "2026",
  description:
    "A responsive, accessible personal portfolio built to showcase projects, experience, and skills with a focus on clean architecture and thoughtful UI design.",
  highlights: [
    "Designed and built from scratch using modern React functional components",
    "Implemented smooth, accessible animations using Framer Motion with reduced-motion support",
    "Created a responsive layout optimized for mobile, tablet, and desktop",
    "Focused on semantic HTML, keyboard navigation, and accessibility best practices",
    "Deployed using Vercel with CI-based production builds"
  ],
  tech: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "Accessibility",
    "Vercel"
  ],
  links: {
    live: "https://rohan-bansal.vercel.app",
    code: "https://github.com/System32NotFound/Portfolio"
  }
},
{
    slug: "sentiment-analysis-dashboard",
    title: "Sentiment Analysis Dashboard",
    year: "2024",
    role: "Data analytics and ML",
    description:
      "Analyzed Covid Vaccination Twitter data and presented insights in a clear dashboard, then trained models to classify sentiment.",
    impact:
      "Achieved over 80 percent classification accuracy across multiple approaches and communicated results through a dashboard.",
    highlights: [
      "Cleaned and transformed text data, then engineered features for model training",
      "Compared LSTM, Naive Bayes, and SVM to understand tradeoffs and performance",
      "Built a dashboard to explain trends and model outcomes in a way non technical users can scan",
    ],
    tech: ["Python", "SQL", "Power BI", "Django", "ML"],
    links: {
      live: null,
      repo: "https://github.com/System32NotFound/Vaccination_sentiment",
    },
  },
  {
    slug: "threat-analysis-mininet-ics",
    title: "Threat Analysis on Simulated ICS Network",
    year: "2024",
    role: "Network security and analysis",
    description:
      "Researched and implemented attack detection on a Mininet simulated ICS environment using traffic analysis and classification.",
    impact:
      "Built a repeatable simulation and analysis workflow to test detection logic across different attack scenarios.",
    highlights: [
      "Generated and captured traffic in a controlled Mininet environment for repeatable experiments",
      "Explored features and detection logic for separating normal and suspicious behaviour",
      "Documented assumptions, limitations, and evaluation approach to make results interpretable",
    ],
    tech: ["Python", "Mininet", "Network Security", "Traffic Analysis"],
    links: {
      live: null,
      repo: "https://github.com/System32NotFound/ICS_Project",
    },
  },
  {
    slug: "client-business-websites",
    title: "Client Business Websites",
    year: "2023",
    role: "Frontend developer (freelance)",
    description:
      "Delivered responsive business websites with clear information architecture, accessible UI, and performance focused implementation.",
    impact:
      "Shipped real client sites end to end, prioritizing mobile usability, clean structure, and maintainable content updates.",
    highlights: [
      "Worked with stakeholders to translate business needs into simple page structure and UX",
      "Built responsive layouts and ensured consistent typography and spacing across devices",
      "Optimized basics like image sizing and page structure for fast loading and clarity",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    links: {
      live: "https://www.donaldcoaccounting.com/",
      repo: null,
    },
  }
];
