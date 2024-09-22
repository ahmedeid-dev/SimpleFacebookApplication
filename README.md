##Simple Facebook Application API

This project is a simple social media API built using Sequelize and Express.js. It handles user registration, authentication, posts, and comments, with full CRUD operations and secure password management.

# Features:

User API:

-    User Registration: Register a new user with a unique email.

-    Login & Logout: Secure login and logout functionality.

-    Password Security: Passwords are hashed using bcrypt.js.


Post API:

-    Create, Read, Update, Delete Posts: Full CRUD operations for managing posts.

-    Post Ownership: Users can only edit or delete (soft delete) their own posts.

-    Post Relationships: Posts are linked to authors (users).


Comment API:

-    Create, Read, Update, Delete Comments: Full CRUD operations for managing comments.

-    Comment Relationships: Comments are linked to posts and users.



Special Endpoints:

-    Get User with Specific Post and Comments: Retrieve a specific user along with their post and comments on that post.

-    Get Post with Author: Retrieve a specific post along with its author information.


Technology Stack:

-    Sequelize ORM: For database modeling and relationships.

-    Express.js: Backend framework for handling routes and controllers.

-    bcrypt.js: For secure password hashing.

-    Postman: Used for API testing and documentation.


Deployment:

-    Backend: Deployed on Render.

-    Database: Deployed on Clever Cloud.


# Setup Instructions:

Clone the repository:


-    git clone https://github.com/yourusername/facebook-app.git


Install dependencies:

npm install

-    Configure environment variables in a .env file:


Database credentials

-    JWT secret

-    Other necessary configs


Run the app:

npm start


Testing:

-    Use Postman to test the API endpoints.

-    Ensure to test user access restrictions, post ownership, and hashed passwords for security.


Postman Collection:

-    A detailed Postman collection is included in the documentation to test the API.


Future Improvements:

-    Add JWT for user session handling and authentication.

-    Implement pagination for posts and comments.

-    Add frontend interface for a complete user experience.
-    
