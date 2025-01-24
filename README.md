# Pric-Technology-Assignment
# MERN CRUD Application

This is a full-stack **MERN** (MongoDB, Express, React, Node.js) application that allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. The backend is built with **Node.js** and **Express**, and the frontend is built using **React** and **TailwindCSS** for styling.

The backend serves API endpoints for managing user data, and the frontend interacts with these APIs to display and manipulate the data. The app is designed to be simple yet functional, demonstrating the core concepts of MERN stack development.

## Technologies Used

- **Frontend**: 
  - React
  - TailwindCSS
  - JavaScript (ES6)
  
- **Backend**:
  - Node.js
  - Express
  - MongoDB (using Mongoose)

- **Other**:
  - CORS (for handling cross-origin requests)
  - React Toastify (for showing notifications)

## Features

- **Create User**: Add new users to the database.
- **Read Users**: View the list of users stored in the database.
- **Update User**: Update user details.
- **Delete User**: Remove users from the database.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine. [Download Node.js](https://nodejs.org/).
- MongoDB running locally or you can use a cloud MongoDB service (e.g., MongoDB Atlas).

### Backend Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mern-crud-app.git
   cd mern-crud-app/backend
   
2. Install the backend dependencies:
   
        npm install
   
    Set up your MongoDB database URL in the .env file:
   
      MONGODB_URI=mongodb://localhost:27017/mern-crud

   
4.  Start the backend server:
   
        npm run dev
    
    By default, the backend will run on http://localhost:5000.
    
### Frontend Setup


  1.Navigate to the frontend directory:
  
      cd ../frontend

      
  2.Install the frontend dependencies:
  
      npm install

      
  3. Start the frontend development server:
     
          npm start
     
      By default, the frontend will run on http://localhost:3000.

     

