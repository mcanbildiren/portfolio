export const profile = {
  name: 'Mustafa Can Bildiren',
  title: 'Backend Software Developer',
  subtitles: ['Software Developer', 'Electrical & Electronics Engineer'],
  bio: [
    "I'm a Backend Software Developer passionate about building scalable, secure, and high-performance systems. With a Master's in Computer Engineering and a Bachelor's in Electrical and Electronics Engineering, I combine a strong technical foundation with a problem-solving mindset to deliver impactful solutions.",
    'My expertise includes the .NET ecosystem, microservices architecture, and event-driven systems. I thrive in collaborative environments and am committed to continuous learning to stay at the forefront of backend development.',
  ],
  photo: '/Resources/Photo.jpg',
  socials: {
    github: 'https://github.com/mcanbildiren',
    linkedin: 'https://www.linkedin.com/in/mcanbildiren/',
    instagram: 'https://www.instagram.com/mcanbildiren/',
  },
}

export const skills = [
  { category: 'Programming Languages', items: ['C#', 'Python', 'JavaScript'] },
  { category: 'Backend Development', items: ['.NET', 'RESTful API Development'] },
  { category: 'Database Management', items: ['PostgreSQL', 'Elasticsearch', 'Microsoft SQL Server'] },
  { category: 'Architecture & Design', items: ['Microservices', 'Domain-Driven Design (DDD)', 'CQRS', 'SAGA Design Pattern'] },
  { category: 'Messaging & Queues', items: ['RabbitMQ', 'MassTransit'] },
  { category: 'Caching & Performance', items: ['Redis', 'Hangfire'] },
  { category: 'CI/CD & Version Control', items: ['GitLab', 'Bitbucket', 'GitHub', 'Jenkins'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'Google Cloud'] },
  { category: 'Soft Skills', items: ['Agile/Scrum', 'Problem-Solving', 'Team Collaboration', 'Technical Documentation'] },
]

export const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'Istanbul Metropolitan Municipality',
    date: 'November 2025 - Present',
    points: [
      'Designed and developed backend services for the İBB Superapp using .NET and Clean Architecture, serving millions of active citizens across Istanbul.',
      'Architected scalable, high-traffic web applications with structured entity design and EF Core, supporting 200K+ daily requests/transactions.',
      'Joined the R&D team to automate official document verification processes using on-premise AI models, improving institutional data security and reducing manual review time.',
      'Built and delivered features for social assistance and community-focused municipal programs, improving service accessibility for Istanbul residents.',
      'Led the modernization of a legacy codebase team, transitioning workflows and tooling to current technology standards.',
      'Introduced and embedded a code review process within the team, establishing it as standard practice.',
      'Conducted technical interviews for new developer candidates and standardized the post-interview case study process, including project criteria design.',
      'Mentored newly graduated junior developers and standardized onboarding/training programs for interns.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'HangiPara',
    date: 'August 2023 - November 2025',
    points: [
      'Backend development of mobile banking processes such as payment methods, money transfers, and wallet transactions.',
      'Built highly scalable, maintainable microservice architectures using .NET and Domain-Driven Design principles.',
      'Integrated with BKM using CQRS; built open banking and payment order creation with PostgreSQL for writes and Elasticsearch for reads.',
      'Managed integrations with third-party providers and developed Proxy APIs.',
      'Contributed to KYC identity verification and AML anti-money-laundering structures.',
      'Implemented logging on Elasticsearch with Serilog, messaging with RabbitMQ/MassTransit, background jobs with Hangfire, and distributed cache with Redis.',
      'Used GitLab and Bitbucket for CI/CD; improved reliability through unit testing and Agile/Scrum practices.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'HangiKredi',
    date: 'July 2022 - August 2023',
    points: [
      'Backend development for a banking product comparison website.',
      'Built scalable, maintainable microservice applications with .NET and Domain-Driven Design.',
      'Worked on performance optimization, code quality, and security standards.',
      'Implemented messaging with RabbitMQ, background jobs with Hangfire, and distributed cache with Redis.',
      'Used Bitbucket for CI/CD; increased reliability with unit tests and Agile/Scrum collaboration.',
    ],
  },
  {
    role: 'Web Development Instructor',
    company: 'ALT+TAB Incubation Center (Güngören Municipality)',
    date: 'August - October 2025',
    points: [
      'Delivered a comprehensive web development program focused on modern web app development using MVC architecture.',
      'Taught C# fundamentals, HTML, CSS, Git version control, and how the Internet and web technologies work.',
      'Concluded with a capstone project and final presentations of participants’ practical skills.',
    ],
  },
  {
    role: 'Quality Assurance Engineer, Internship',
    company: 'Murat Ticaret',
    date: 'July 2019',
    points: [
      'Gained experience developing software tools to automate quality control tests in production.',
      'Supported efforts to ensure and improve quality standards.',
      'Developed skills in teamwork, problem-solving, and technical documentation.',
    ],
  },
]

export const education = [
  { period: '2023 - 2025', degree: "Computer Engineering, Master's Degree", school: 'Bahcesehir University' },
  { period: '2016 - 2020', degree: "Electrical and Electronics Engineering, Bachelor's Degree", school: 'Bahcesehir University' },
  { period: 'Additional', degree: 'Languages & Service', school: 'English (C1), Turkish (Native) · Military Service: Completed' },
]

export const achievements = [
  { title: 'GIS Hackathon First Place', org: 'Istanbul Buyuksehir Belediyesi, Smart City Branch Directorate' },
  { title: 'Web Development Course', org: 'Bahcesehir University - Wissen Akademie - İŞKUR' },
  { title: 'Building Microservices with .NET', org: 'Fatih Çakıroğlu' },
  { title: 'Future AI Summit’24', org: 'Bahcesehir University' },
  { title: 'Secure Software Development', org: 'BlueMark Academy' },
  { title: 'Introduction to Azure Seminar', org: 'Microsoft Student Partners' },
  { title: 'Next Generation of Information Technology Seminar', org: 'Bahcesehir University Software and Informatics Student Club' },
  { title: 'Ideathon Idea Marathon Seminar', org: 'Yeditepe University' },
  { title: 'Google on Campus by Can DEMİREZEN', org: 'Bahcesehir University Leadership and Entrepreneurship Student Club' },
]
