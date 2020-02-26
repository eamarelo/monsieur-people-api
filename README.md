# Monsieur People API
## Introduction  
 This repository contains the back-end of the application Monsieur People. This repository is opened for the My Digital School's hackathon.
install `nodejs` & `npm`
  
## How to use it
- Clone this repository to your local storage:
`git clone https://eamarelo@bitbucket.org/borderlinedev/borderline-api.git`
- Config the .env
- Install the database with the sql files
- Install dependencies:
`npm i`
- Run the project to http://localhost:4444/ :
`npm run start`

## UML
<div style="text-align:center"><img src="./image.png"></div>.

## URL REQUEST

### USER PART

#### Register an user

- URI : http://localhost:4444/api/auth/register
- method: POST  
- Data to send :
`{
    "nom": "caillet",
    "prenom": "jean philippe",
    "email": "jp78920@hotmail.com",
    "idRole": 2,
    "password": "1234"
}`
  
- response: 
`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNmODJjNzRkM2NkMTZkODRiMzYyMiIsImlhdCI6MTUyMjMzMzc0MCwiZXhwIjoxNTIyNDIwMTQwfQ.ZhW2VDbOWk0m9iMMP5KifHdlwe5CFn9FjO7izBtcz6o"
}`
  
#### Get list all users
  
- URI : http://localhost:4444/users/  
- method: GET 
- response: 
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

- URI : http://localhost:4444/users/:id
- method: GET
- response: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Update an user

- URI : http://localhost:4444/users/:id
- method: PUT 
- data to send :

`{
    "name": "Aladin"
}`

- response before modification: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

- response before modification: `{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Aladin",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Delete an user

- URI : http://localhost:4444/users/:id
- method : DELETE
- resonse: User was deleted.

#### Get user by token

- URI : http://localhost:4444/api/auth/me
- Headers:`{
    "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMyMTMzMywiZXhwIjoxNTIyNDA3NzMzfQ.BHdZhxboUpGcTZVVv6ERAx3ttruGbUvf_Sw6mQPNPOA"
}`
- method : GET
- response :
`{
    "_id": "5abcc7b5375e0d19f0ec2065",
    "name": "jaime",
    "email": "jaime@hotmail.fr",
    "__v": 0
}`

#### Login /Authentification

- URI : http://localhost:4444/api/auth/login
- data to send :

`{
    "email": "mail@mail.com",
    "password": "password"
}`

- method: POST
- response if correct : 

`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMzNDE2MSwiZXhwIjoxNTIzMTk4MTYxfQ.CmvzV9766J4HdowKyG2RRytaXFpWp1WFgQSBT-We1j4"
}`

- Response if incorrect : 
`{
    "auth": false,
    "token": null
}`

### BOT PART

 - URI : http://localhost:4444/bot
 - data to send :
 
`{
    "question": "bonjour"
}`

- method: POST
- HEADER : [{"key":"x-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpwNzg5MjBAaG90bWFpbC5jb20iLCJtZHAiOiIkMmIkMTAkLmZUR3dVMjdadHA1UUZ1Z0tzbWpsLlVZczJQNVBoUEVGVE9TMXo1SHZWb0ZmelBNTmhkUGkiLCJub20iOiJjYWlsbGV0IiwicHJlbm9tIjoiamVhbiBwaGlsaXBwZSIsIl9pZCI6MiwiaWF0IjoxNTgyNzA4Mzk2fQ.CzjO62muIZ3vyVngeiKQ956B-HaUDpQ8bt2nFrWF1Dk"}]
- response if correct : 
`{
    "shows": true,
    "message": "Salut caillet jean philippe, je suis Paul, ton assistant personnel! Pour démarrer peux-tu me donner tes centres d'intérêts"
}`

- response if incorrect : 
`{
    "shows": false,
    "message": "Failed to authenticate token."
}`

### EVENTS PART

#### SHOW ALL EVENTS

- URI : http://localhost:4444/events/shows
- method: get
- HEADER : [{"key":"x-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpwNzg5MjBAaG90bWFpbC5jb20iLCJtZHAiOiIkMmIkMTAkLmZUR3dVMjdadHA1UUZ1Z0tzbWpsLlVZczJQNVBoUEVGVE9TMXo1SHZWb0ZmelBNTmhkUGkiLCJub20iOiJjYWlsbGV0IiwicHJlbm9tIjoiamVhbiBwaGlsaXBwZSIsIl9pZCI6MiwiaWF0IjoxNTgyNzA4Mzk2fQ.CzjO62muIZ3vyVngeiKQ956B-HaUDpQ8bt2nFrWF1Dk"}]

- response if correct : 
`[
    {
        "eventsName": "Tournois de tennis",
        "description": "ceci est un tournois de tennis venez nombreux",
        "dateEvent": "2020-02-25T23:00:00.000Z",
        "categorie": "Sport",
        "photo": "https://i.eurosport.com/2020/02/12/2773902-57300050-2560-1440.jpg?w=750"
    },
    {
        "eventsName": "Tournois de foot",
        "description": "tournois pour les amateurs de foot.\r\nmotivez et sympathique venez nombreux",
        "dateEvent": "2020-02-28T23:00:00.000Z",
        "categorie": "Sport",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg"
    },
    {
        "eventsName": "Soiré d'integration",
        "description": "cette soirée a pour but de nous rapprocher et d'apprendre a tous nous connaitre venez nombreux",
        "dateEvent": "2020-03-17T23:00:00.000Z",
        "categorie": "Soirée",
        "photo": "https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree.jpg"
    },
    {
        "eventsName": "fin. d'année !!!",
        "description": "cette soirée à pour but de fêter  comme il se doit cette fin d'année scolaire.",
        "dateEvent": "2020-03-30T22:00:00.000Z",
        "categorie": "Soirée",
        "photo": "https://lh3.googleusercontent.com/proxy/gogrx8j2ypPWffJlxEaK3-qDRfNT3zPTJgn1l0CHZS2sFfc9RKYntSfnWhIlwqdhfFHdt3r5kS8I30N4a4u9pE5f-9HHokQBPGidheA1vs3itNcPdBof7KGhw5D0tnkEsjkkFfZIyH8yIMpqGYCNOrC4DKTUAkUwnbx1Fw"
    },
    {
        "eventsName": "concert gratuit",
        "description": "le groupe de musique de my digiital school vous invite a venir les voir en concert. Entrer gratuite\r\nles consommations sont a votre charge.",
        "dateEvent": "2020-04-07T22:00:00.000Z",
        "categorie": "Musique",
        "photo": "https://www.saintsebastien.fr/sites/default/files/pmaa-diapo.jpg"
    },
    {
        "eventsName": "concert de Booba",
        "description": "vous voulez allez voir le concert de booba nous avons des place moins cher a vous proposer!!",
        "dateEvent": "2020-04-14T22:00:00.000Z",
        "categorie": "Musique",
        "photo": "https://www.leparisien.fr/resizer/uwIK850Hf9hpl82WYQ8ZBtlZWeU=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/RH6Y7HZPSC7ZAEHTKLAV67WFS4.jpg"
    },
    {
        "eventsName": "Stage Développeur Web",
        "description": "Google cherche un stagiaire pour développer une application de BDE",
        "dateEvent": "2020-02-23T23:00:00.000Z",
        "categorie": "Stage",
        "photo": "https://s3.amazonaws.com/images.seroundtable.com/pastel-haze-Google-1900px--1456937097.jpg"
    },
    {
        "eventsName": "Stage Chef de Projet",
        "description": "nous recherchons un chef de projet au sein de  notre compagny ",
        "dateEvent": "2020-02-23T23:00:00.000Z",
        "categorie": "Stage",
        "photo": "https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/sites/regions_france3/files/styles/top_big/public/assets/images/2019/01/11/maxnewsworldfour578097-4033475.jpg?itok=9g3sjjXU"
    },
    {
        "eventsName": "Alternance développeur web",
        "description": "Capgemini recherche un alternant pour une duré de 2 ans ",
        "dateEvent": "2020-03-25T23:00:00.000Z",
        "categorie": "Alternance",
        "photo": "https://www.lerevenu.com/sites/site/files/styles/img_lg/public/field/image/capgemini_entreprise_3.jpg?itok=h8F08UYe"
    },
    {
        "eventsName": "Alternance chef e produit",
        "description": "facebook recherche un alternant pour une duré de 2 ans ",
        "dateEvent": "2020-01-20T23:00:00.000Z",
        "categorie": "Alternance",
        "photo": "https://img.phonandroid.com/2019/09/facebook-the-pirate-bay.jpg"
    }
]`
response if incorrect : 
`{
    "shows": false,
    "message": "Failed to authenticate token."
}`

#### SHOW FUTURES EVENTS

- URI : http://localhost:4444/events/show/futur
- method: get
- HEADER : [{"key":"x-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpwNzg5MjBAaG90bWFpbC5jb20iLCJtZHAiOiIkMmIkMTAkLmZUR3dVMjdadHA1UUZ1Z0tzbWpsLlVZczJQNVBoUEVGVE9TMXo1SHZWb0ZmelBNTmhkUGkiLCJub20iOiJjYWlsbGV0IiwicHJlbm9tIjoiamVhbiBwaGlsaXBwZSIsIl9pZCI6MiwiaWF0IjoxNTgyNzA4Mzk2fQ.CzjO62muIZ3vyVngeiKQ956B-HaUDpQ8bt2nFrWF1Dk"}]

- response if correct : 
`[
    {
        "eventsName": "Tournois de foot",
        "description": "tournois pour les amateurs de foot.\r\nmotivez et sympathique venez nombreux",
        "dateEvent": "2020-02-28T23:00:00.000Z",
        "categorie": "Sport",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg"
    },
    {
        "eventsName": "fin. d'année !!!",
        "description": "cette soirée à pour but de fêter  comme il se doit cette fin d'année scolaire.",
        "dateEvent": "2020-03-30T22:00:00.000Z",
        "categorie": "Soirée",
        "photo": "https://lh3.googleusercontent.com/proxy/gogrx8j2ypPWffJlxEaK3-qDRfNT3zPTJgn1l0CHZS2sFfc9RKYntSfnWhIlwqdhfFHdt3r5kS8I30N4a4u9pE5f-9HHokQBPGidheA1vs3itNcPdBof7KGhw5D0tnkEsjkkFfZIyH8yIMpqGYCNOrC4DKTUAkUwnbx1Fw"
    },
    {
        "eventsName": "concert de Booba",
        "description": "vous voulez allez voir le concert de booba nous avons des place moins cher a vous proposer!!",
        "dateEvent": "2020-04-14T22:00:00.000Z",
        "categorie": "Musique",
        "photo": "https://www.leparisien.fr/resizer/uwIK850Hf9hpl82WYQ8ZBtlZWeU=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/RH6Y7HZPSC7ZAEHTKLAV67WFS4.jpg"
    },
    {
        "eventsName": "Stage Développeur Web",
        "description": "Google cherche un stagiaire pour développer une application de BDE",
        "dateEvent": "2020-02-23T23:00:00.000Z",
        "categorie": "Stage",
        "photo": "https://s3.amazonaws.com/images.seroundtable.com/pastel-haze-Google-1900px--1456937097.jpg"
    },
    {
        "eventsName": "Alternance développeur web",
        "description": "Capgemini recherche un alternant pour une duré de 2 ans ",
        "dateEvent": "2020-03-25T23:00:00.000Z",
        "categorie": "Alternance",
        "photo": "https://www.lerevenu.com/sites/site/files/styles/img_lg/public/field/image/capgemini_entreprise_3.jpg?itok=h8F08UYe"
    }
]`

- response if incorrect : 

`{
    "shows": false,
    "message": "Failed to authenticate token."
}`

#### SHOW PAST EVENTS

- URI : http://localhost:4444/events/show/past
- method: get
- HEADER : [{"key":"x-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpwNzg5MjBAaG90bWFpbC5jb20iLCJtZHAiOiIkMmIkMTAkLmZUR3dVMjdadHA1UUZ1Z0tzbWpsLlVZczJQNVBoUEVGVE9TMXo1SHZWb0ZmelBNTmhkUGkiLCJub20iOiJjYWlsbGV0IiwicHJlbm9tIjoiamVhbiBwaGlsaXBwZSIsIl9pZCI6MiwiaWF0IjoxNTgyNzA4Mzk2fQ.CzjO62muIZ3vyVngeiKQ956B-HaUDpQ8bt2nFrWF1Dk"}]

- response if correct : 
`[
    {
        "eventsName": "Tournois de tennis",
        "description": "ceci est un tournois de tennis venez nombreux",
        "dateEvent": "2020-02-25T23:00:00.000Z",
        "categorie": "Sport",
        "photo": "https://i.eurosport.com/2020/02/12/2773902-57300050-2560-1440.jpg?w=750"
    },
    {
        "eventsName": "Soiré d'integration",
        "description": "cette soirée a pour but de nous rapprocher et d'apprendre a tous nous connaitre venez nombreux",
        "dateEvent": "2020-03-17T23:00:00.000Z",
        "categorie": "Soirée",
        "photo": "https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree.jpg"
    },
    {
        "eventsName": "concert gratuit",
        "description": "le groupe de musique de my digiital school vous invite a venir les voir en concert. Entrer gratuite\r\nles consommations sont a votre charge.",
        "dateEvent": "2020-04-07T22:00:00.000Z",
        "categorie": "Musique",
        "photo": "https://www.saintsebastien.fr/sites/default/files/pmaa-diapo.jpg"
    }
]`

- response if incorrect : 

`{
    "shows": false,
    "message": "Failed to authenticate token."
}`

### FURTHER

You can import the monsieur_people.postman_collection.json to postman to get more details of requests

