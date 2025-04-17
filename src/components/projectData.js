// projectData.js
const projectData = [
  {
    title: "Agribazzar",
    category: "Android",
    image: "/images/agribazzar.jpg", 
    images: [
      "/images/agribazzar1.png",
      "/images/agribazzar2.png",
      "/images/agribazzar3.png",
    ],
    live: "https://your-agribazzar-live-link.com",
    source: "https://github.com/your-agribazzar-repo",
    overview:
      "A fully functional React Native application designed to connect farmers and buyers. It features real-time chat, negotiation, and seamless agri-trade facilitation.",
    challenge:
      "Building real-time communication and negotiation flows while maintaining performance and data consistency across users.",
    solution:
      "Integrated Supabase for real-time backend functionality and used Sanity CMS for flexible content management. Modular and scalable architecture ensured fast, responsive interactions.",
    tech: ["React Native", "Supabase", "Sanity", "Expo", "Socket.io"],
    video: "https://www.youtube.com/embed/QgPKWoHXCgo",
  },
  {
    title: "Web Test Conducting App",
    category: "Web",
    image: "/images/Test1 (5).png", 
    images: [
      "/images/Test1 (1).png",
      "/images/Test1 (2).png",
      "/images/Test1 (3).png",
      "/images/Test1 (4).png",
      "/images/Test1 (5).png",
    ],
    live: "https://your-agribazzar-web-link.com", // Replace with your actual live link
    source: "https://github.com/your-agribazzar-web-repo", // Replace with your GitHub repo
    overview:
      "A fully functional web application built to conduct tests for students, featuring an admin panel to monitor attendance, submissions, and restricts access to results until admin approval.",
    challenge:
      "Building a secure and seamless test-taking environment with real-time monitoring, preventing cheating behaviors like switching tabs and taking screenshots while maintaining performance.",
    solution:
      "Used MongoDB as the database for student and test data management. The admin panel allows tracking of student attendance and submissions. Restrictions on leaving the test, taking screenshots, and showing results only after admin approval were implemented. Real-time updates were integrated using Socket.io.",
    tech: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Socket.io",
      "JWT",
      "Bootstrap",
    ],
    video: "https://www.youtube.com/embed/QgPKWoHXCgo",
  },
 
 
];

export default projectData;
