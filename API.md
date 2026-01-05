# SkillSwap API

## Auth

POST /api/auth/login  
Body:
```json
{ "email": "user@test.com", "password": "123456" }

# SkillSwap API Documentation

Base URL:
http://localhost:5000/api

yaml
## Authentication
### Login
**Endpoint**

POST /auth/login
css
**Description**
Logs a user in and returns a JWT token.

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "123456"
}

Response
json
{
  "token": "jwt_token_here"
}

Skills
Get All Skills
Endpoint

bash
GET /skills
Headers

makefile
Authorization: Bearer <JWT_TOKEN>

Response
json
[
  {
    "id": 1,
    "title": "Guitar",
    "description": "Beginner guitar lessons",
    "category": "Music"
  }
]

Add a Skill:
Endpoint
bash
POST /skills

Headers
pgsql
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Request Body:
json
{
  "title": "Yoga",
  "description": "Morning yoga sessions",
  "category": "Fitness"
}

Response:
json

{
  "message": "Skill added successfully"
}

Error Responses:

Code	      Meaning
401	       Unauthorized / Invalid token
400	       Bad request
500	       Server error

Notes:

All protected routes require JWT authentication.

Token must be passed in the Authorization heade
