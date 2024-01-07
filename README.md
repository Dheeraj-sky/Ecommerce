# E-Commerce Website using MERN Stack

This is a full-stack E-Commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a comprehensive foundation for building and deploying an online store. This README will guide you through the setup process and explain how to use and customize the application.

# [View live Demo](https://main--bespoke-brioche-fac046.netlify.app/)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens) for access control.
- **Product Catalog**: Display a wide range of products with details and images.
- **Shopping Cart**: Add and manage products in the cart before proceeding to checkout.
- **Checkout Process**: Streamlined checkout with billing and shipping information.
- **Responsive Design**: A responsive user interface that works well on both desktop and mobile devices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your development machine. You can download it [here](https://nodejs.org/).
- **MongoDB**: Install and configure MongoDB. You can download MongoDB [here](https://www.mongodb.com/try/download/community).
- **Git**: Make sure you have Git installed to clone this repository.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/e-commerce-mern.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-mern
   ```

3. Install the server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install the client dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Create a `.env` file in the `server` directory and configure your environment variables. Use the provided `.env.example` as a template.

6. Start the server:

   ```bash
   cd ../server
   npm start
   ```

7. Start the client (in a separate terminal window):

   ```bash
   cd ../client
   npm start
   ```

8. Access the application in your web browser at `http://localhost:3000`.

## Project Structure

The project is organized into two main directories: `client` and `server`.

- `client`: The front-end codebase built with React.js.
- `server`: The back-end codebase built with Node.js and Express.js.
- 
## Configuration

- Database configuration:  you can configure the MongoDB connection in `db.js`.
- Environment variables: Create a `.env` file in the `server` directory for environment-specific configuration. Refer to `.env.example` for required variables.

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request to the `main` branch of the original repository.

6. We will review your pull request, and once approved, your changes will be merged.


Happy coding! If you have any questions or need further assistance, please don't hesitate to contact us.
