# Tech Blog
A blog to share your riveting thoughts on tech

Bootcamp Challenge 14: MVC

Demo of Heroku:

![demo](/herokudemo.gif)

## Description

This comprehensive full-stack application was crafted to empower users in creating and engaging with tech-related content. The platform provides a dedicated space on the dashboard for users to store their content, facilitates commenting on posts from other users, and allows seamless editing and deletion of one's own posts. Upon landing on the homepage, users can freely explore all current posts without requiring an account. However, accessing the dashboard or attempting to create/view specific posts prompts users to log in or create an account. The application ensures secure user authentication through session storage and cookies, implementing specific routing and page protection.

To enhance security, user passwords undergo hashing via the bcrypt dependency before being stored in the MySQL database. The project follows a Model-View-Controller (MVC) architecture, leveraging the Object-Relational-Mapping (ORM) tool Sequelize to establish a connection between the front-end code (UI) and the database. Express routing is employed for efficient navigation. Additionally, the project integrates the Handlebars templating engine, streamlining the process of passing data from the database to the front-end in a Don't Repeat Yourself (DRY) and simplified manner.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the Repository. 
2. Open VSCode, install NodeJS if needed and run npm install in the integrated terminal.
3. Once all packages are installed, open mysql in the terminal and run source ./db/schema.sql and in bash run node ./seeds/seed.js.
3. Run the application by typing the command node server.js or npm start in the terminal.

## Usage  

Local Demo:

![demo](/demo.gif)

## Credits

- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize) 
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [bcrypt package](https://www.npmjs.com/package/bcrypt)
- [express-session](https://www.npmjs.com/package/express-session)


## License 
MIT License

Copyright (c) [2023] [Mukunth Arjunan]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.