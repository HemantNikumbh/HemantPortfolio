# MERN Stack Portfolio Website

A dynamic and responsive portfolio website built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This project showcases personal projects, skills, and experience while allowing easy updates through a secure admin panel.

---

## Features

- **Dynamic Content Management**: Easily add and update projects, skills, and contact information.
- **User Authentication**: Secure login for managing portfolio content.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **RESTful APIs**: Backend APIs for managing portfolio data.
- **Modern UI/UX**: Engaging, clean, and user-friendly interface.
- **State Management**: Efficient handling with React Hooks.

---

## Project Structure

```bash
portfolio-mern/
├── client/                  # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Portfolio pages (Home, Projects, etc.)
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
├── server/                  # Node.js backend
│   ├── config/              # Database configuration
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Middleware functions
│   └── server.js            # Server entry point
├── .env                     # Environment variables
├── package.json             # Project metadata
└── README.md                # Documentation
