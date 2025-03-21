# Insurance Policy Management System

## Overview
This is a simple Insurance Policy Management System built with **React** (frontend) and **Flask** (backend) using **SQLite** as the database. The system allows users to **view, add, edit, and delete** insurance policies while providing search and filter capabilities.

## Features
### Frontend (React)
- Dashboard to display a list of insurance policies
- Form to add new insurance policies
- Functionality to edit and delete existing policies
- Basic search and filter capabilities

### Backend (Flask & SQLite)
- RESTful API endpoints for CRUD operations on insurance policies
- Proper error handling and validation
- SQLite database for persistent storage

## Technologies Used
### Frontend:
- React
- React Router
- Axios (for API requests)
- Tailwind CSS (for styling)

### Backend:
- Flask
- Flask-RESTful
- SQLite

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python 3 & pip

### Backend Setup
1. Navigate to backend folder
```bash
cd backend
```
2. Configure Flask Environment
```bash
python -m venv venv
source venv/bin/activate 
```
3. Install the required dependencies
```bash
pip install flask flask-restful flask-sqlalchemy 
```
4. Start the Flask server:
```bash
python app.py
```

### Frontend Setup
1. Clone the repository.
```bash
git clone git@github.com:SylviaT01/Insurance-Policy-Management-System.git
```
2. Install the required frontend dependencies:
```bash
npm install
```
3. Run the React development server:
```bash
npm run dev
```

## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | `/policies`    | Get all policies |
| GET    | `/policies/<id>` | Get a specific policy |
| POST   | `/policies`    | Add a new policy |
| PUT    | `/policies/<id>` | Update a policy |
| DELETE | `/policies/<id>` | Delete a policy |

## Future Improvements
- User authentication and role-based access
- Enhanced UI/UX with more interactive elements.

## Contributions
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Author
[Sylvia Chebet](https://github.com/SylviaT01)

## License
This project is licensed under the MIT License.


