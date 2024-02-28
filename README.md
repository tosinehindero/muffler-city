# muffler-city

muffler-city is a business website with interactive intake form for services offered by website owner.

## Table of Contents

- [About](#about)
- [Features][def]
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## About

This project is a business website designed for a mechanic shop, aimed at providing users with comprehensive information about the repair shop and the diverse range of services it offers. Users can conveniently schedule service appointments through the website by creating an account and providing vehicle information via the schedule service form. Additionally, website administrators will have access to a dashboard page where they can view all appointments and service requests made on the site.

## Features

- Users can schedule vehicle service appointments via form.
- Users can view list of services offered.
- business information for new hires is provided on site for users to view

## Installation

Provide instructions on how to install your project, including any dependencies or prerequisites.(to be comnpleted)

1. Fork the Repository: Contributors should fork this repository to their GitHub accounts by clicking the "Fork" button at the top-right corner of the   repository page.
2. Set Up Database:
- Create a PostgreSQL database named mufflerdb.
- Configure your database connection settings in the .env file. An example .env file might look like this:
- PORT=3001
  DB_USER=postgres
  DB_PASS=tosin
  DB_HOST=localhost
  DB_PORT=5432
  DB_NAME=mufflerdb
3. Run Migrations: Execute the database migrations to set up the required tables by running the following command:knex migrate:latest
4.  Run Seed File: Seed the database with initial data by running the seed file : knex seed:run
5.  cd into muffler-city and mufflerCity-backend and npm install to install project dependancies simutaneously.
6.  npm run start to start the backend.
7.  npm run dev to start the front-end.
8.  Access the Application: Access the application by opening a web browser and navigating to http://localhost:3001 


## Usage

to be added-



## Contributing

Fork the repository
Create a new branch (git checkout -b feature/foo-bar)
Make your changes
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/foo-bar)
Create a new Pull Request


[def]: #features