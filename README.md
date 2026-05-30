# Food App - Full Stack Application

A modern food delivery application built with React (frontend) and Express.js (backend). This project is a full-stack web application that combines a responsive React UI with a Node.js/Express API server.

## 📋 Project Overview

**Food App** is a comprehensive full-stack web application designed to manage food orders, showcase menu items, and provide a seamless user experience. The project is structured with a separate frontend (React) and backend (Node.js Express) for scalability and maintainability.

### Project Structure

```
web_project/
├── food-app/                 # Backend - Node.js Express Server
│   ├── server.js            # Main server entry point
│   ├── package.json         # Backend dependencies
│   ├── .env                 # Environment configuration (PORT=8080)
│   ├── controllers/         # Business logic controllers
│   │   └── testController.js
│   ├── routes/              # API route definitions
│   │   └── testRoutes.js
│   ├── config/              # Configuration files
│   ├── models/              # Database models
│   ├── middlewares/         # Custom middlewares
│   ├── data/                # Data storage/resources
│   └── utils/               # Utility functions
│
└── react-app/my-app/        # Frontend - React Vite App
    ├── package.json         # Frontend dependencies
    ├── vite.config.js       # Vite configuration
    ├── index.html           # Main HTML file
    ├── src/
    │   ├── main.jsx         # React entry point
    │   ├── App.jsx          # Main App component
    │   ├── App.css          # App styles
    │   ├── index.css        # Global styles
    │   ├── Component/
    │   │   ├── Header.jsx   # Header component
    │   │   └── Header.css   # Header styles
    │   └── assets/          # Static assets
    └── public/              # Public assets
```

---

## 🚀 Current Status - Work Completed

### ✅ Completed Tasks

1. **Project Structure Setup**
   - Organized frontend and backend in separate directories
   - Proper folder structure for scalability

2. **Backend (Express.js) - Functional**
   - Server initialized with Express.js (v5.2.1)
   - CORS enabled for cross-origin requests
   - Morgan middleware for HTTP request logging
   - Dotenv configured for environment variables
   - API endpoint: `GET /api/v1/test/test-user` (Test endpoint working)
   - Home route: `GET /` returns welcome message
   - Server running on port 8080

3. **Frontend (React + Vite) - Fixed & Functional**
   - React 19.2.4 with Vite build tool
   - Fixed export/import mismatch in App.jsx
   - Fixed Header component CSS import
   - Component structure established (Header component created)
   - ESLint configured for code quality
   - Development server ready

4. **Bug Fixes Applied**
   - ✅ Fixed: `App.jsx` was exporting named export, `main.jsx` was importing as default
   - ✅ Fixed: `Header.jsx` had incorrect import path (`'./Header.jsx'` → `'./Header.css'`)
   - ✅ Fixed: Both apps now run without errors

5. **Git & Version Control**
   - Project initialized with Git
   - All files committed to repository
   - Remote linked to: `https://github.com/Teja16sree/Food_app.git`
   - Pushed to main branch on GitHub

---

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework (v5.2.1)
- **Nodemon** - Auto-reload during development
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend

- **React** - UI library (v19.2.4)
- **Vite** - Build tool & dev server
- **React DOM** - React rendering
- **ESLint** - Code linting & quality

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Backend Setup

```bash
cd food-app
npm install
npm run server
# Server runs on http://localhost:8080
```

### Frontend Setup

```bash
cd react-app/my-app
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 🔗 API Endpoints

### Test Endpoint

- **GET** `/api/v1/test/test-user`
  - Response: `{ success: true, message: "test user Data API" }`

### Home Endpoint

- **GET** `/`
  - Response: HTML welcome message

---

## 🎯 Future Enhancements & Roadmap

### Phase 1: Core Features (Next)

- [ ] **User Authentication**
  - Implement JWT-based authentication
  - User login/signup functionality
  - Password hashing with bcrypt
  - User session management

- [ ] **Database Integration**
  - Set up MongoDB or PostgreSQL
  - Create database models for Users, Orders, Menu Items
  - Implement data persistence

### Phase 2: Food Management

- [ ] **Menu Management**
  - Add, edit, delete food items
  - Category organization (Appetizers, Mains, Desserts, etc.)
  - Food item details with images, price, description
- [ ] **Shopping Cart**
  - Add items to cart
  - Remove items from cart
  - Calculate totals
  - Persistent cart (localStorage or database)

### Phase 3: Order Management

- [ ] **Order Placement**
  - Create orders from cart
  - Order tracking
  - Order history for users
  - Order status updates (Pending, Confirmed, Preparing, Delivered)

- [ ] **Payment Integration**
  - Stripe/Razorpay payment gateway
  - Payment confirmation
  - Invoice generation

### Phase 4: Advanced Features

- [ ] **User Profile**
  - User information management
  - Address management (delivery addresses)
  - Preferences and favorites
  - Order history view

- [ ] **Admin Dashboard**
  - Dashboard for restaurant admin
  - Order management system
  - Menu management interface
  - Sales analytics and reports
  - User management

- [ ] **Reviews & Ratings**
  - User reviews for food items
  - Star ratings system
  - Review display on product pages

### Phase 5: Frontend Enhancement

- [ ] **UI/UX Improvements**
  - Responsive design for mobile/tablet
  - Modern CSS framework (Tailwind CSS or Material-UI)
  - Smooth animations and transitions
  - Better component organization

- [ ] **Search & Filter**
  - Food search functionality
  - Filter by category, price, ratings
  - Search bar with autocomplete

### Phase 6: Performance & Deployment

- [ ] **Optimization**
  - Image optimization and lazy loading
  - Code splitting and bundle optimization
  - API caching strategies
- [ ] **Deployment**
  - Deploy backend (Heroku, AWS, Azure, or DigitalOcean)
  - Deploy frontend (Vercel, Netlify, or GitHub Pages)
  - Setup CI/CD pipeline
  - Environment configuration for production

### Phase 7: DevOps & Maintenance

- [ ] **Testing**
  - Unit tests for backend APIs
  - Integration tests
  - Frontend component testing
  - End-to-end tests

- [ ] **Monitoring & Logging**
  - Error tracking and logging
  - Performance monitoring
  - User analytics

- [ ] **Security**
  - Input validation and sanitization
  - SQL injection prevention
  - XSS protection
  - Security headers

---

## 🚦 Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/Teja16sree/Food_app.git
cd Food_app

# Start Backend
cd food-app
npm install
npm run server

# Start Frontend (in a new terminal)
cd react-app/my-app
npm install
npm run dev

# Access the application
# Frontend: http://localhost:5173
# Backend: http://localhost:8080
# Backend Test API: http://localhost:8080/api/v1/test/test-user
```

---

## 📝 Development Notes

- Both backend and frontend must be running simultaneously for full functionality
- Backend API is on port 8080
- Frontend dev server is on port 5173 by default
- All changes are tracked in Git and pushed to the GitHub repository
- Environment variables are configured via `.env` file in the backend

---

## 🤝 Contributing

This project is actively under development. Future contributions should follow the established folder structure and coding conventions.

---

## 📄 License

ISC License - See package.json for details

---

## 👤 Author

**Teja** - Initial setup and development

---

## 📞 Support

For issues, bugs, or suggestions, please create an issue in the GitHub repository.

---

**Last Updated:** May 30, 2026
