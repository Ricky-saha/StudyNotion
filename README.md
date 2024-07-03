StudyNotion Online Education Platform (MERN App) 
 ![study notion](https://github.com/Ricky-saha/StudyNotion/assets/134414493/a286ac76-33a7-4a8c-9582-af29e4d7ee38)


<h1>Project Description</h1>
StudyNotion is a fully functional (at developing stage)  ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. StudyNotion aims to provide:<br>
•	A seamless and interactive learning experience for students, making education more accessible and engaging.
•	A platform for instructors to showcase their expertise and connect with learners across the globe. In the following sections, we will cover the technical details of the platform, including:<br>
1.	System architecture: The high-level overview of the platform's components and diagrams of the architecture.<br>
2.	Front-end: The description of the front-end architecture, user interface design, features, and functionalities of the front-end, and frameworks, libraries, and tools used.<br>
3.	Back-end: The description of the back-end architecture, features and functionalities of the back-end, frameworks, libraries, tools used, and data models and database schema.<br>
4.	API Design: The description of the API design, list of API endpoints, their functionalities, and sample API requests and responses.<br>
5.	Deployment: The description of the deployment process, hosting environment and infrastructure, and deployment scripts and configuration.<br>
6.	Testing: The description of the testing process, types of testing, test frameworks and tools used.<br>
7.	Future Enhancements: The list of potential future enhancements to the platform, explanation of how these enhancements would improve the platform, estimated timeline and priority for implementing these enhancements.<br>
In summary, StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise. In the following sections, we will delve into the technical details of the platform, which will provide a comprehensive understanding of the platform's features and functionalities.<br>

<h1>System Architecture</h1>
The StudyNotion ed-tech platform consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.<br>
Front-end<br>
The front end of the platform is built using ReactJS, ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls<br>
Back-end<br>
The back end of the platform is built using NodeJS and ExpressJS,. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.<br>
Database<br>
The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.
Architecture Diagram<br>

![image](https://github.com/Ricky-saha/Study-Notion/assets/134414493/9e553dc2-2ac5-4827-a46b-ab466f593ce2)<br>

Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform:<br>
 
<h1>Front End</h1><br>
The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are:<br>
<h2>For Students:</h2><br>
•	Homepage: This page will have a brief introduction to the platform, as well as links to the course list and user details.<br>
•	Course List: This page will have a list of all the courses available on the platform, along with their descriptions and ratings.<br>
•	Wishlist: This page will display all the courses that a student has added to their wishlist.<br>
•	Cart Checkout: This page will allow the user to complete the course purchase.<br>
•	Course Content: This page will have the course content for a particular course, including videos, and other related material.<br>
•	User Details: This page will have details about the student's account, including their name, email, and other relevant information.<br>
•	User Edit Details: This page will allow the student to edit their account details.<br>
<h2>For Instructors:</h2>
•	Dashboard: This page will have an overview of the instructor's courses, as well as the ratings and feedback for each course.<br>
•	Insights: This page will have detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.<br>
•	Course Management Pages: These pages will allow the instructor to create, update, and delete courses, as well as manage the course content and pricing.<br>
•	View and Edit Profile Details: These pages will allow the instructor to view and edit their account details. PAGE 3 For Admin (this is for future scope):<br>
•	Dashboard: This page will have an overview of the platform's courses, instructors, and students.<br>
•	Insights: This page will have detailed insights into the platform's metrics, including the number of registered users, courses, and revenue.<br>
•	Instructor Management: This page will allow the admin to manage the platform's instructors, including their account details, courses, and ratings.<br>
•	Other Relevant Pages: The admin will also have access to other relevant pages, such as user management and course management pages.<br>
To build the front end, we use frameworks and libraries such as ReactJS, We also use CSS and Tailwind, which are styling frameworks that help make the user interface look good and responsive. To manage the state of the application, we use Redux, which is a popular state management library for React.<br>


<h1>Back End</h1><br>
Description of the Back-end Architecture: StudyNotion uses a monolithic architecture, with the backend built using Node.js and Express.js, and MongoDB as the primary database.
Features and Functionalities of the Back-end: The back end of StudyNotion provides a range of features and functionalities, including:<br>
1.	User authentication and authorization: Students and instructors can sign up and log in to the platform using their email addresses and password. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.<br>
2.	Course management: Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.<br>
3.	Payment Integration: Students will purchase and enrol on courses by completing the checkout flow that is followed by Razorpay integration for payment handling.<br>
4.	Cloud-based media management: StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.<br>
5.	Markdown formatting: Course content in document format is stored in Markdown format, which allows for easier display and rendering on the front end.<br>
Frameworks, Libraries, and Tools used: The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:<br>
1.	Node.js: Node.js is used as the primary framework for the back end.<br>
2.	MongoDB: MongoDB is used as the primary database, providing a flexible and scalable data storage solution.<br>
3.	Express.js: Express.js is used as a web application framework, providing a range of features and tools for building web applications.<br>
4.	JWT: JWT (JSON Web Tokens) are used for authentication and authorization, providing a secure and reliable way to manage user credentials.<br>
5.	Bcrypt: Bcrypt is used for password hashing, adding an extra layer of security to user data.<br>
6.	Mongoose: Mongoose is used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript<br><br>
Data Models and Database Schema:<br>
The back end of StudyNotion uses a range of data models and database schemas to manage data, including:<br>
1.	Student schema: Includes fields such as name, email, password, and course details for each student.<br>
2.	Instructor schema: Includes fields such as name, email, password, and course details for each instructor.<br>
3.	Course schema: Includes fields such as course name, description, instructor details, and media content.<br>
Overall, the back-end of StudyNotion is designed to provide a robust and scalable solution for an ed-tech platform, with a focus on security, reliability, and ease of use. By using the right frameworks, libraries, and tools, we can ensure that the platform functions smoothly and provides an optimal user experience for all its users.<br>
 
![image](https://github.com/Ricky-saha/Study-Notion/assets/134414493/e9b4f93d-e7df-4e55-a4e1-9c34144f517d)


<h1>API Design</h1><br>
The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE. Sample list of API endpoints and their functionalities:<br>
1.	/api/auth/signup (POST) - Create a new user (student or instructor) account.<br>
2.	/api/auth/login (POST) – Log in using existing credentials and generate a JWT token.<br>
3.	/api/auth/verify-otp (POST) - Verify the OTP sent to the user's registered email.<br>
4.	/api/auth/forgot-password (POST) - Send an email with a password reset link to the registered email.<br>
5.	/api/courses (GET) - Get a list of all available courses.<br>
6.	/api/courses/:id (GET) - Get details of a specific course by ID.<br>
7.	/api/courses (POST) - Create a new course.<br>
8.	/api/courses/:id (PUT) - Update an existing course by ID.<br>
9.	/api/courses/:id (DELETE) - Delete a course by ID.<br>
10.	/api/courses/:id/rate (POST) - Add a rating (out of 5) to a course. Sample API requests and responses:<br>
11.	GET /api/courses: Get all courses<br>
o	Response: A list of all courses in the database<br>
12.	GET /api/courses/:id: Get a single course by ID<br>
o	Response: The course with the specified ID<br>
13.	POST /api/courses: Create a new course<br>
o	Request: The course details in the request body<br>
o	Response: The newly created course<br>
14.	PUT /api/courses/:id: Update an existing course by ID<br>
o	Request: The updated course details in the request body<br>
o	Response: The updated course<br>
15.	DELETE /api/courses/:id: Delete a course by ID<br>
o	Response: A success message indicating that the course has been deleted.<br>
In conclusion, the REST API design for the StudyNotion ed-tech platform is a crucial part of the project. The API endpoints and their functionalities are designed to ensure seamless communication between the front-end and back-end of the application. By following RESTful principles, the API will be scalable, maintainable, and reliable. The sample API requests and responses provided above illustrate how each endpoint will function and what kind of data it will accept or return. With this API design, StudyNotion will be able to provide a smooth user experience while ensuring security and stability.
