# Dynamic Portfolio Website 🌟

A **Dynamic Portfolio Website** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This application showcases personal projects, skills, and contact information while providing an admin panel to update content dynamically.

---

## 🚀 Features

- **Dynamic Content Management**: Easily add, update, or delete projects and information through the admin panel.
- **User-Friendly UI**: Modern, responsive, and visually appealing interface.
- **Admin Authentication**: Secure login for authorized users (JWT-based).
- **RESTful APIs**: Backend APIs built to handle CRUD operations.
- **State Management**: Managed state efficiently using React hooks.
- **Navigation**: Integrated `React Router DOM` for smooth navigation across pages.
- **Responsive Design**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Modular Architecture**: Backend structured using the **MVC Architecture**.

---

## 🛠️ Tech Stack

### **Frontend**  
- React.js  
- React Router DOM  
- Axios for API calls  
- CSS Framework: Tailwind CSS / Bootstrap  

### **Backend**  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### **Additional Tools**  
- JSON Web Token (JWT) for Authentication  
- Postman for API Testing  

---

## 📂 Project Structure

```bash
📦 dynamic-portfolio
├── 📂 client                # React.js Frontend
│   ├── 📂 public            # Static assets
│   ├── 📂 src
│   │   ├── 📂 components    # Reusable components
│   │   ├── 📂 pages         # Page-level components
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│
├── 📂 server                # Node.js Backend
│   ├── 📂 config            # Database and config files
│   ├── 📂 controllers       # Logic for APIs
│   ├── 📂 models            # Mongoose models
│   ├── 📂 routes            # API routes
│   ├── server.js            # Server entry point
│
└── package.json             # Project metadata

