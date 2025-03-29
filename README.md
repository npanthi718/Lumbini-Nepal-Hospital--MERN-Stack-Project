# 🏥 **Hospital Management System**

<<<<<<< HEAD
Welcome to the **Hospital Management System**, a comprehensive full-stack web application designed to streamline hospital operations and enhance patient care. Built with a powerful **Node.js** backend and a dynamic **React.js** frontend, this system ensures a seamless experience for administrators, doctors, and patients alike.
=======
<div align="center">
  <img src="frontend/public/images/Logo.jpeg" alt="Lumbini Nepal Hospital Logo" width="200"/>
  <h3>Modern Healthcare Management Solution</h3>
  <p>A comprehensive hospital management system built with the MERN stack</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Material_UI-5.17.1-0081CB?style=for-the-badge&logo=material-ui" alt="Material UI"/>
</p>

## ✨ Features

### 👤 Patient Portal
- **Account Management**
  - Secure registration and login
  - Profile management
  - Medical history access
- **Appointment System**
  - Browse doctors by specialization
  - View doctor profiles & availability
  - Schedule/cancel appointments
- **Medical Records**
  - Access prescriptions
  - View treatment history
  - Download medical reports

### 👨‍⚕️ Doctor Dashboard
- **Profile Management**
  - Professional profile setup
  - Availability management
  - Consultation fee settings
- **Patient Care**
  - Appointment management
  - Digital prescription writing
  - Patient history access
  - Treatment records management

### 👑 Admin Control Panel
- **User Management**
  - Doctor registration approval
  - Patient account oversight
  - Staff access control
- **Hospital Operations**
  - Department management
  - Appointment oversight
  - System configuration
- **Analytics**
  - Patient statistics
  - Appointment analytics
  - Revenue reports

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI development
- **Material UI** - Component library
- **Axios** - API communication
- **JWT** - Authentication
- **Formik & Yup** - Form handling & validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/npanthi718/Lumbini-Nepal-Hospital--MERN-Stack-Project.git
cd Lumbini-Nepal-Hospital--MERN-Stack-Project
```

2. Install dependencies
```bash
# Install backend/ frontend dependencies

npm install
npm run build

```

3. Environment Setup
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

4. Start the application
```bash
# Start backend/ frontend simultaneously by only:
npm run dev

```

---

## 📽️ **Demo Video**

Watch the full demo of the **Hospital Management System** showcasing all features and functionalities:

[![Watch the Demo](https://drive.google.com/file/d/1qe58qWPFIisWnKE3ICuby9QM5zIL5yTv/view?usp=sharing)

Click the link above to view the video.

---

## 🔑 Default Credentials

### Admin Access
- **Email:** superadmin@lumbinihospital.com  or  your_post_of_management@lumbinihospital.com
- **Password:** superadmin@123               or  your_post123



### Doctor Access
- **Email:** doctor_firstname.lastname@lumbinihospital.com
- **Password:** password123

## 📱 UI Snapshots

<div align="center">
  <img src="frontend/public/images/UI Snapshots/Non-logedin Dahboard.png" alt="Non-Loggedin Dashboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/About us.png" alt="Patient Dashboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Our Management Team.png" alt="Doctor Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Our Expert Doctors.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Our Departments.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Services.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Login Dashboard.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Register Dashboard.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/User_Patient Dashboard.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Doctor Dahboard.png" alt="Admin Dahboard" width="45%"/>
  <img src="frontend/public/images/UI Snapshots/Admin Dashboard.png" alt="Admin Dahboard" width="45%"/>
</div>

## 🔒 Security Features

- JWT based authentication
- Password hashing with bcrypt
- Role-based access control
- HTTP-only cookies
- XSS protection
- CORS configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Sushil Panthi** - _Initial work_ - [GitHub](https://github.com/npanthi718)

## 📞 Support

For support, email info@lumbininepalhospital.com or npanthi718@gmail.com
>>>>>>> 2ff22c9 (Making Ready for Deployment)

---

## 🌟 **Key Features**

✨ **User Management**  
Effortlessly manage patients, doctors, and admin users with role-based access control.

✨ **Appointments**  
Schedule, update, and track appointments with ease.

✨ **Prescriptions**  
Generate and manage prescriptions for patients.

✨ **Departments**  
Organize and manage hospital departments efficiently.

✨ **Contact Management**  
Handle inquiries and feedback from users.

✨ **Authentication**  
Secure login with JWT-based authentication and role-based access.

✨ **Admin Dashboard**  
A comprehensive dashboard with tools for administrators to monitor and manage hospital operations.

---

## 🗂️ **Project Structure**

### **Backend** (`/backend`)

The backend is powered by **Node.js** and **Express.js**, providing RESTful APIs for the frontend.

#### 📁 **Folders and Files**

- **`app.js`**: Application entry point.
- **`server.js`**: Configures and starts the server.
- **`middleware/`**: Custom middleware for authentication and admin access.
  - `admin.js`: Admin-specific middleware.
  - `auth.js`: Authentication middleware.
- **`models/`**: Mongoose models for MongoDB.
  - `appointment.model.js`: Appointment schema.
  - `contact.model.js`: Contact schema.
  - `department.model.js`: Department schema.
  - `doctor.model.js`: Doctor schema.
  - `prescription.model.js`: Prescription schema.
  - `user.model.js`: User schema.
- **`routes/`**: API routes for different modules.
  - `admin.routes.js`: Admin-related routes.
  - `appointment.routes.js`: Appointment-related routes.
  - `auth.routes.js`: Authentication routes.
  - `contact.routes.js`: Contact-related routes.
  - `department.routes.js`: Department-related routes.
  - `doctor.routes.js`: Doctor-related routes.
  - `patient.routes.js`: Patient-related routes.
  - `prescription.routes.js`: Prescription-related routes.
  - `user.routes.js`: User-related routes.
- **`scripts/`**: Utility scripts for database operations.
- **`seeds/`**: Seed data for initializing the database.

#### 📦 **Backend Dependencies**

- **Express.js**: Web framework.
- **Mongoose**: MongoDB object modeling.
- **dotenv**: Environment variable management.
- **bcrypt**: Password hashing.
- **jsonwebtoken**: Token-based authentication.

---

### **Frontend** (`/frontend`)

The frontend is built with **React.js**, offering a responsive and user-friendly interface.

#### 📁 **Folders and Files**

- **`public/`**: Static assets and HTML template.
- **`src/`**: React components, hooks, and utilities.
  - `components/`: Reusable UI components.
  - `pages/`: Page-level components for routing.
  - `hooks/`: Custom React hooks.
  - `services/`: API integration services.
  - `styles/`: CSS and styling files.
- **`package.json`**: Frontend dependencies and scripts.

#### 📦 **Frontend Dependencies**

- **React.js**: Frontend library.
- **Axios**: HTTP client for API requests.
- **React Router**: Routing for single-page applications.
- **Bootstrap**: Styling and responsive design.

---

## 🚀 **Getting Started**

### **Prerequisites**

- **Node.js** (v14+)
- **MongoDB** (local or cloud instance)

### **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/npanthi718/Lumbini-Nepal-Hospital--MERN-Stack-Project.git
   cd hospital-management-system
   ```

2. **Backend Setup**:

   ```bash
   cd backend
   npm install
   ```

   - Create a `.env` file in the `backend` directory:

     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:

   ```bash
   cd ../frontend
   npm install
   ```

   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

## 🛠️ **Development Workflow**

### **Backend**

- Add new models in the `models/` directory.
- Define API endpoints in the `routes/` directory.
- Use middleware from the `middleware/` directory for authentication and role-based access.

### **Frontend**

- Create new components in the `src/components/` directory.
- Use `Axios` for API integration.
- Manage state using React hooks or context.

---

## 🧪 **Testing**

- **Backend**: Use `Jest` and `Supertest` for unit and integration tests.
- **Frontend**: Use `React Testing Library` for component testing.

---

## 📽️ **Demo Video**

Watch the full demo of the **Hospital Management System** showcasing all features and functionalities:

[![Watch the Demo](https://drive.google.com/file/d/1qe58qWPFIisWnKE3ICuby9QM5zIL5yTv/view?usp=sharing)

Click the link above to view the video.

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

---

## 📜 **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 💬 **Contact**

For any inquiries or support, please contact us at **npanthi718@gmail.com**.

---

### 🌟 **Star this repository if you found it helpful!**
