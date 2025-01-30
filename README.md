# Portfolio API

This is a Node.js Express API with JWT authentication and MongoDB (using Mongoose) for managing personal portfolio data. It allows users to retrieve details about the portfolio owner, including projects, skills, education history, and more.

## Features

- User authentication with JWT
- Manage personal details
- CRUD operations for projects
- CRUD operations for skills
- CRUD operations for education history
- Contact form integration
- Experience and certifications management
- Blog posts (optional)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT

## Installation

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/portfolio-api.git
   cd portfolio-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### User Details

- `GET /api/user` - Get portfolio owner details
- `PUT /api/user` - Update portfolio owner details

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Skills

- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add a skill
- `DELETE /api/skills/:id` - Remove a skill

### Education

- `GET /api/education` - Get education history
- `POST /api/education` - Add an education record
- `DELETE /api/education/:id` - Remove an education record

### Experience

- `GET /api/experience` - Get work experience
- `POST /api/experience` - Add work experience
- `DELETE /api/experience/:id` - Remove work experience

### Contact

- `POST /api/contact` - Submit a contact form message

## License

This project is licensed under the MIT License.

## Author

**Samora Laurent Mchuma**

## Contributing

Feel free to fork and contribute to this project!
