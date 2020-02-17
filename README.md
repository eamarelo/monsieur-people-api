# Monsieur People API

## Introduction  
Here you can find the API for the project LiveClass by Elies AMARELO

## Prerequisites  

install `nodejs` & `npm`
  
## How to use it
Clone this repository to your local storage:
`git clone https://eamarelo@bitbucket.org/borderlinedev/borderline-api.git`
<br>
and install dependencies:
`npm i`
<br>
Run the project to http://localhost:3000/ :
`npm run start`

## UML

#### Table Users

| USERS | type
| --- | --- 
| _id | String
|Name | String
| email | String
| password | String/hashed

## URL REQUEST

### USER PART
#### Register an user

URI : http://localhost:3000/api/auth/register
method: POST  
Data to send :
`{ 
	"name": "name",
	"email": "email@hotmail.fr",
	"password": "password"
}`
  
response: 
`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNmODJjNzRkM2NkMTZkODRiMzYyMiIsImlhdCI6MTUyMjMzMzc0MCwiZXhwIjoxNTIyNDIwMTQwfQ.ZhW2VDbOWk0m9iMMP5KifHdlwe5CFn9FjO7izBtcz6o"
}`
  
#### Get list all users
  
URI : http://localhost:3000/users/  
method: GET
  
response: 
`[
    {
        "_id": "5abcb9e23e638722f860de02",
        "name": "Guizmo",
        "email": "jasmine@hotmail.fr",
        "password": "elies",
        "__v": 0
    },
    {
        "_id": "5abcbb629464d5370ccb5d60",
        "name": "Katy",
        "email": "Katy@hotmail.fr",
        "password": "Jasmine",
        "__v": 0
    },
    {
        "_id": "5abcbdc29464d5370ccb5d62",
        "__v": 0
    },
    {
        "_id": "5abcc7b5375e0d19f0ec2065",
        "name": "jaime",
        "email": "jaime@hotmail.fr",
        "password": "$2a$08$0ffEqllxsQwgoXAI9qulJuPeEwwlFemYa7CWR6IfJBC2i61XPZYiG",
        "__v": 0
    },
    {
        "_id": "5abce5f4454c0a1f141dcad8",
        "__v": 0
    },
    {
        "_id": "5abce812454c0a1f141dcad9",
        "name": "Elies",
        "email": "elies@hotmail.fr",
        "password": "Jasmine",
        "__v": 0
    },
    {
        "_id": "5abceefe9fc39f2db83a59ee",
        "name": "Vincent",
        "email": "Vincent@hotmail.fr",
        "password": "Salle",
        "__v": 0
    }
]`
#### Get user by Id

URI : http://localhost:3000/users/:id
method: GET

response: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Update an user

URI : http://localhost:3000/users/:id
method: PUT 
data to send :
`{
	"name": "Aladin"
}`
response before modification: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

response before modification: `{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Aladin",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Delete an user

URI : http://localhost:3000/users/:id
method : DELETE
resonse: User was deleted.

#### Get user by token
URI : http://localhost:3000/api/auth/me

Headers:`{
	"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMyMTMzMywiZXhwIjoxNTIyNDA3NzMzfQ.BHdZhxboUpGcTZVVv6ERAx3ttruGbUvf_Sw6mQPNPOA"
}`

method : GET

response :
`{
    "_id": "5abcc7b5375e0d19f0ec2065",
    "name": "jaime",
    "email": "jaime@hotmail.fr",
    "__v": 0
}`

#### Login /Authentification

URI : http://localhost:3000/api/auth/login
data to send :
`{
	"email":"email@hotmail.fr",
	"password":"password"
}`
method: POST

response if correct : 
`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMzNDE2MSwiZXhwIjoxNTIzMTk4MTYxfQ.CmvzV9766J4HdowKyG2RRytaXFpWp1WFgQSBT-We1j4"
}`

response if incorrect : 
`{
    "auth": false,
    "token": null
}`
