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
Copy code

---

## Authentication

### Login

**Endpoint**
POST /auth/login

css
Copy code

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
Copy code
{
  "token": "jwt_token_here"
}
Skills
Get All Skills
Endpoint

bash
Copy code
GET /skills
Headers

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
Response

json
Copy code
[
  {
    "id": 1,
    "title": "Guitar",
    "description": "Beginner guitar lessons",
    "category": "Music"
  }
]
Add a Skill
Endpoint

bash
Copy code
POST /skills
Headers

pgsql
Copy code
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
Request Body

json
Copy code
{
  "title": "Yoga",
  "description": "Morning yoga sessions",
  "category": "Fitness"
}
Response

json
Copy code
{
  "message": "Skill added successfully"
}
Error Responses
Code	Meaning
401	Unauthorized / Invalid token
400	Bad request
500	Server error

Notes
All protected routes require JWT authentication.

Token must be passed in the Authorization heade
