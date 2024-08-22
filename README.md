# X-plore: A Comprehensive Search Engine

![X-plore](Homepage.png)

## Overview

X-plore is a comprehensive search engine designed to provide accurate and relevant search results tailored to user queries. The project leverages Clerk for robust user authentication and MongoDB for efficient data storage, offering users a secure and trustworthy search experience. I played a crucial role throughout the project lifecycle, from initial design to deployment, handling both front-end and back-end development.

## Features

- **Accurate Search Results**: Provides precise and relevant search results based on user queries.
- **Secure Authentication**: Clerk ensures robust user authentication and authorization.
- **User-Friendly Interface**: Intuitive front-end design with React, Vite, TypeScript, Material UI, and Magic UI.
- **Efficient Data Management**: Backend powered by Spring Boot and MongoDB.

## Technologies Used

- **Front End**: React, Vite, TypeScript, Material UI, Magic UI
- **Back End**: Java Spring Boot, Spring Tool Suite (STS)
- **Database**: MongoDB
- **Authentication**: Clerk

## Installation

### Prerequisites

- Node.js
- Java JDK
- MongoDB
- Spring Tool Suite (STS)

### Front End

1. Clone the repository:
    ```bash
    git clone https://github.com/yadavmangesh07/X-plore.git
    cd X-plore React
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Back End

1. Configure the database:
    - Ensure MongoDB is running and accessible.
    - Update the `application.properties` file with your MongoDB credentials:
        ```properties
        spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
        ```

2. Build and run the application:
    ```bash
    ./mvnw spring-boot:run
    ```

## Usage

1. Access the front-end application at `http://localhost:5173`.
2. Interact with the application to perform searches and manage your search history.

## API Endpoints

### Authentication

- **POST /api/auth/signin**: User sign-in
- **POST /api/auth/signup**: User sign-up
- **POST /api/auth/signout**: User sign-out

### Search

- **GET /api/search**: Retrieve search results based on a query
- **POST /api/search/history**: Save search history
- **GET /api/search/history**: Retrieve user search history

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of React, Vite, TypeScript, Spring Boot, Clerk, and MongoDB, and all other open-source projects that made this project possible.

## Contact

- GitHub: [yadavmangesh07](https://github.com/yadavmangesh07)
- LinkedIn: [Mangesh Yadav](https://www.linkedin.com/in/mangesh-yadav-65a437237)
