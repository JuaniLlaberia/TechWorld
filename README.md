# TechWorld | Full-Stack App
Using the famous MERN tack I developed TechWorld, a job searching web application that allows you to post and seach jobs. This includes the server-side API and the client-side. The API includes authentication, authorization, a variety of functionalities to customize your profile, create job offer posts, it handles sending emials and more while everything is securied in the MongoDB database in the cloud. And in the fron-end user can interact with all this features with a user friendly interface.

![logo](https://firebasestorage.googleapis.com/v0/b/jobsapp-2b306.appspot.com/o/logo1.png?alt=media&token=f5d203e4-b8fc-47d9-a71a-37f7acf995e7&_gl=1*v1x7lh*_ga*MTgyNTUwNTc2OS4xNjk3NDk0NTQw*_ga_CW55HF8NVT*MTY5NzU3MTc4Ny4zLjEuMTY5NzU3MTgyNi4yMS4wLjA.)
## Features

### Security
 - Signup with 2FA (two factor authentication) and secure **JWT** (JSON Web Token).
 - Login and the authentication process are scure with **JWT** being send in the cookies.
 - Encrypting password and token for extra security.
 - Token expiration after a certain amount of time and also if password have been change.
 - All data is sanitize to prevent **XSS**, **NoSQL injections**.
 - Some routes have a rate limit implemented. In the case of the login endpoint, this is to avoid brute force attacks and DoS attacks.
 - Route protection in the API and also in the front-end.

### Data Storage
 - All user and jobs data is store in our MongoDB database (atlas cloud service).
 - Data models with mongoose that include type check and validation to ensure that data is correct.
 - Data pagination to boost performance.
 - Profile images are optimize before being uploaded to our cloud bucket.
 - The images are store in the **Firebase cloud storage** service.

### User Experience
 - After signing up, users are able to customize their profile. Change description, previous experience, skills, field of work and more.
 - Search for jobs, add filters to find what you are looking. In addition you can search by profession/name and get all the available results.
 - Recommended for you page, where the user can find jobs that matches its profile profession and location.
 - All jobs/user list have an infinite scrolling system implemented to maximize the smoothness and UX.
 - Apply for jobs. Send your information and CV file to the employer just by submitting a form. The API handles the rest, validating data and sending everything via email to the job owner.
 - Create and publish your own jobs for everyone to see.

### Front-End
 - Implemented a variety of React design patterns for the development of this application (e.g. Compound components, render props, etc.).
 - Used a system based on **custom hooks** and **react query** to handle all client side async operation. 
 - Modern and responsive design using **Tailwind CSS**.
 - Smooth infinite scrolling to handle API pagination in the client side.

## Technologies
#### Front-End
![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white)
![React Forms](https://img.shields.io/badge/React%20Hook%20Form-EC5990.svg?style=for-the-badge&logo=React-Hook-Form&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### Back-End
![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

















