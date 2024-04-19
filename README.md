# Attendance Portal Backend

This is the backend server for the Attendance Portal, a full-stack web application for managing attendance records using Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The backend of the Attendance Portal is responsible for handling authentication, managing attendance records, and serving data to the frontend. It provides RESTful APIs for various operations such as user authentication, marking attendance, retrieving records, etc.

## Prerequisites

Before running the backend server, ensure you have the following installed:

- Node.js (v14 or later)
- npm (Node.js package manager)
- MongoDB (running locally or accessible via URL)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chandrasura25/Attendance-Portal-Backend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd attendance-portal-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add environment variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/attendance_portal
   SECRET_KEY=your_secret_key
   ```

## Usage

To start the backend server, run the following command:

```bash
npm start
```

The server will start listening on the port specified in the `.env` file (`PORT` variable).

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: User login.
- `GET /api/auth/dashboard`: Get user dashboard data.
- `POST /api/attendance`: Create a new attendance record.
- `GET /api/attendance`: Get all attendance records.
- `GET /api/attendance/:id`: Get attendance record by ID.
- `POST /api/attendance/:id`: Update attendance record.
- `DELETE /api/attendance/:id`: Delete attendance record.

For detailed documentation of each endpoint, refer to the source code comments.

## Deployment

The backend server can be deployed to a cloud platform such as Heroku. Ensure you set up secure access controls and authentication mechanisms before deploying to production.

## Contributing

Contributions are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
