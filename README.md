Job Portal
A full-stack job portal built with React + Vite on the frontend and Node.js + Express + MongoDB on the backend.
The application supports candidate and recruiter workflows, job creation and management, applications, protected routes, and cookie-based authentication with server-side session validation.
This repository is a portfolio/demo project. Company names and job data used for testing can be fictional.

Features
Authentication & Security
- User registration and login
- Candidate and recruiter roles
- HttpOnly cookie-based authentication
- Access and refresh token flow
- MongoDB-backed sessions
- Server-side session validation
- Session revocation on logout
- Refresh-token rotation
- Protected frontend routes
- Credentialed CORS configuration
- Password hashing with bcrypt
- Backward-compatible password migration for existing legacy hashes
Candidate
- Browse jobs
- Search/filter jobs
- View job details
- Apply for jobs
- Add a cover letter
- View submitted applications
- Track application status
- Manage candidate profile
Recruiter
- Recruiter dashboard
- Create jobs
- Edit jobs
- Delete owned jobs
- View recruiter jobs
- View applicants
- View applicant details
- Update application status
- Manage recruiter profile
Tech Stack
Frontend
- React 19
- Vite
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React / React Icons
Backend
- Node.js
- Express 5
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- CORS
- dotenv
Project Structure
Job Portal/
├── Server/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Request/business logic
│   │   ├── middlewares/     # Authentication and role checks
│   │   ├── models/          # Mongoose models
│   │   └── routes/          # API routes
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── Context/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
└── README.md
Prerequisites
Install the following before running the project:
- Node.js 18+ recommended
- npm
- MongoDB locally, or a MongoDB Atlas database
Installation
1. Clone/download the project
Open a terminal in the project root:
cd "Job Portal"
2. Install backend dependencies
cd Server
npm install
3. Configure backend environment variables
Copy the example file:
cp .env.example .env
On Windows, you can simply copy .env.example to .env manually.
Example local configuration:
PORT=3000
mongoURI=mongodb://127.0.0.1:27017/job-portal
accessTokenSecretKey=replace-with-a-long-random-secret
refreshTokenSecretKey=replace-with-another-long-random-secret
FRONTEND_URL=http://localhost:5173
COOKIE_SECURE=false
COOKIE_SAME_SITE=strict
Use long, unpredictable secrets for both token keys. Never commit .env to Git.
4. Install frontend dependencies
Open a second terminal:
cd "Job Portal/client"
npm install
Copy the frontend environment file:
cp .env.example .env
Local example:
VITE_API_URL=http://localhost:3000
Running Locally
Start backend
From Job Portal/Server:
node server.js
The backend runs on:
http://localhost:3000
Start frontend
From Job Portal/client:
npm run dev
Vite normally starts the frontend at:
http://localhost:5173
Authentication Flow
Authentication is intentionally not stored in localStorage or sessionStorage.
The current flow is:
Login
  ↓
POST /auth/login
  ↓
Credentials validated
  ↓
MongoDB session created
  ↓
Access + refresh tokens issued as HttpOnly cookies
  ↓
GET /auth/profile
  ↓
Authenticated user restored in AuthContext
Protected API requests send cookies automatically through Axios credentials.
Session validation
For protected requests, the backend verifies the access token and validates the corresponding session in MongoDB. A revoked or expired session is rejected even if the JWT itself has not reached its JWT expiry time.
Logout
Logout should be performed through the existing logout endpoint:
POST /auth/logout
The backend identifies the current session, revokes it, and clears authentication cookies. The frontend then clears its in-memory authentication state.
Main API Routes
Authentication
POST /auth/register
POST /auth/login
GET  /auth/profile
GET  /auth/refresh-token
POST /auth/logout
Jobs
GET    /jobs
GET    /jobs/:id
GET    /jobs/myjobs
POST   /jobs
PUT    /jobs/:id
DELETE /jobs/:id
Applications
Application routes are available under:
/application
Refer to Server/src/routes/applicationRouter.js for the exact application endpoints and required roles.
Production Deployment
A typical production setup is:
Browser
   ↓ HTTPS
React/Vite frontend
   ↓ HTTPS + credentials
Node/Express backend
   ↓
MongoDB Atlas
Set the production environment variables on the backend, for example:
PORT=3000
mongoURI=<production-mongodb-uri>
accessTokenSecretKey=<strong-random-secret>
refreshTokenSecretKey=<strong-random-secret>
FRONTEND_URL=https://your-frontend-domain.com
COOKIE_SECURE=true
COOKIE_SAME_SITE=none
Frontend:
VITE_API_URL=https://your-backend-domain.com
Production cookie requirements
Because authentication uses cookies:
- Production must use HTTPS.
- COOKIE_SECURE=true should be enabled.
- FRONTEND_URL must exactly match the deployed frontend origin.
- Backend CORS must allow that origin with credentials.
- Do not use * as the credentialed CORS origin.
- Keep token secrets private.
If frontend and backend are hosted on the same site/origin, SameSite can be configured according to that deployment topology. For separate frontend/backend sites, SameSite=none with HTTPS is generally required.
Useful npm Commands
Frontend
npm run dev
npm run build
npm run preview
npm run lint
Backend
node server.js
Testing Checklist
Before considering a deployment complete, verify:
- [ ] Registration works
- [ ] Login works
- [ ] Authentication survives a page refresh
- [ ] Protected routes wait for auth loading to finish
- [ ] Unauthenticated users are redirected appropriately
- [ ] Recruiter-only routes reject candidates
- [ ] Candidate application flow works
- [ ] Recruiter can create a job
- [ ] Recruiter can edit an owned job
- [ ] Recruiter cannot delete another recruiter's job
- [ ] Application status updates work
- [ ] Logout clears cookies
- [ ] /auth/profile rejects a revoked session
- [ ] An old/revoked session cannot access protected APIs
- [ ] Refresh-token flow works after access-token expiry
- [ ] No authentication token is stored in localStorage/sessionStorage
- [ ] Production cookies use Secure + appropriate SameSite settings
- [ ] Production CORS accepts only the configured frontend origin
Security Notes
Do not commit any of the following to source control:
- .env
- MongoDB credentials
- JWT secrets
- Production database connection strings
- Private API keys
The repository contains .env.example files only. Replace the example values with real environment variables when running the application.
Project Status
The project is structured as an existing full-stack application with targeted authentication, session, API, validation, and UI fixes applied without replacing the overall architecture.
The authentication layer uses the existing JWT + MongoDB session approach while avoiding client-side token storage.
