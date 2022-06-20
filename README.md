# PrintIt

live: https://print-it-app.herokuapp.com/

A full-stack web application for 3D printer enthusiasts who want to share their prints with others.

## Description

PrintIt was the first full-stack app I built after learning how to implement a backend. I wanted to create a site users could share and download prints with other users.

## Features

* Users can create an account
* Users can sign in
* Users can sign out
* Users can upload an entry
* Users can search for entries
* Users can view details of an entry
* Users can view all entries from other users
* Users can download files from entries

![PrintIt Search](https://user-images.githubusercontent.com/96153171/174522855-a9494ea1-2620-40e5-85d6-285250ea8f3f.gif)
![PrintIt Download](https://user-images.githubusercontent.com/96153171/174522865-166c7ff6-74d2-4d8b-b19f-7a2ad9cf0cd5.gif)

## Technologies Used
* React
* Bootstrap
* HTML
* CSS
* Javascript
* Node.js
* Express.js
* PostgreSQL
* Deployed on Heroku
* AWS S3 Bucket

## Features to be implemented
* User can favorite an entry
* User can edit their own entry
* User can delete an entry

## Getting Started
1 Clone the repository

`git clone`

2 Download all dependencies

`npm install`

3 make a copy of the .env.example

`cp .env.example .env`

4 Insert appropriate config values into the .env (AWS S3 Bucket key is required)


5 Start the PostgreSQL server

`sudo service postgresql start`

6 Create the database

`createdb databasename`

7 Import the database

`npm run db:import`

8 Start the server

`npm run dev`

Project should run on localhost:3000 in your browser
