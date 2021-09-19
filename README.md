<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url] 
[![Forks][forks-shield]][forks-url] 
[![Stargazers][stars-shield]][stars-url] 
[![Issues][issues-shield]][issues-url] 
![Hireable](https://cdn.rawgit.com/hiendv/hireable/master/styles/default/yes.svg) 

# Events-API-Express

>  An API with authentication and permissions. Users can register/login and on role based can perform different CRUD operations over users, events and tickets. Built with Express, Mongoose and JWT.


Additional description about the project and its features.

## Built With

- JAVASCRIPT
- NPM
- EXPRESS
- MONGOOSE
- PASSPORT
- JWT
- NODE
- ESLINT
- GITHUB ACTIONS
- VSCODE

### Usage
To have this app on your pc, you need to:
* [download](https://github.com/javitocor/Events-API-Express/archive/main.zip) or clone this repo:
  - Clone with SSH:
  ```
    git@github.com:javitocor/Events-API-Express.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/javitocor/Events-API-Express.git
  ```
* Requirements:
  - Nodejs and npm
  ```
    [Download Nodejs](https://nodejs.org/en/download/) and follow the instructions, npm is included in the package
  ```
* In the project directory, you can run:

  - `$ npm install` - installs all the dependencies required by the project

  - `$ npm run devstart` - runs the app in the development mode:
    - The API will run in [http://localhost:3000](http://localhost:3000)
    - You can use [Postman](https://www.postman.com/), [cURL](https://curl.se/) or any other tool of your choice to perform the API calls.

### Documentation
* Basic information
  - This project is set up using Express js and Mongoose js, the authentication is based on Passport and JWT strategies. All the permissions to the different routes are set up in 'permissions.js' inside permissionsMiddleware folder.

* Role based
  The API is based on 4 different roles:
  ```
    Basic
    ADMIN_BASIC
    ADMIN_MANAGER
    SUPERADMIN

  ```

* Endpoints
  You can access the following endpoints depending on your user's role, by default a new user is assigned a 'Basic' role
  ```
    Register
      post http://localhost:3000/signup (EVERYONE)
    Login
      post http://localhost:3000/login (Basic, ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Logout
      get http://localhost:3000/logout (Basic, ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Get all users
      get http://localhost:3000/users (ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Get user detail
      get http://localhost:3000/users/:id (ADMIN_MANAGER, SUPERADMIN)
    Update user
      put http://localhost:3000/users/:id (SUPERADMIN)
    Delete user
      delete http://localhost:3000/users/:id (SUPERADMIN)
    Get all ongoing events
      get http://localhost:3000/events/ (Basic, ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Get all events
      get http://localhost:3000/events/all (SUPERADMIN)
    Get event detail
      get http://localhost:3000/events/:id (Basic, ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Create events
      post http://localhost:3000/events/ (ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Update events
      put http://localhost:3000/events/:id (SUPERADMIN)
    Delete events
      delete http://localhost:3000/events/:id (SUPERADMIN)
    Get tickets for an specific event
      get http://localhost:3000/events/:id/tickets (ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Create tickets for an specific event
      post http://localhost:3000/events/:id/tickets (ADMIN_MANAGER, SUPERADMIN)
    Update tickets for an specific event
      put http://localhost:3000/events/:id/tickets/:id (ADMIN_BASIC, ADMIN_MANAGER, SUPERADMIN)
    Delete tickets for a specific event
      delete http://localhost:3000/events/:id/tickets/:id (SUPERADMIN)

  ```

* Seeding
  You can seed the database with the following command:
  ```
    node ./seeder/seed.js
  ```
  In case the db is empty, with this command you will get the 4 basic roles with its user to start performing operations.
  ```
    users: 'Basic', 'ADMIN_BASIC', 'ADMIN_MANAGER', 'SUPERADMIN'
    password: 'password' for all of them
  ```

* Database
  - You can change the MongoDb database by changing the MONGODB_URI field in ./.env file.

* Auth
  - You can modify the different auth strategies by modifying the file 'auth.js' in the 'auth' folder.

### Maintenance and Scalability

This project is no longer maintained, maybe in the future I might add some extra features or routes.
Feel free to download it and adapt it to your own project, the project is easy to understand and it is a good starting point to develop larger backends.
The models, routes and authentication are scalable and easily maintenable.

## Author

👤 **Javier Oriol Correas Sanchez Cuesta**

- Github: [@javitocor](https://github.com/javitocor) 
- Twitter: [@JavierCorreas4](https://twitter.com/JavierCorreas4) 
- Linkedin: [Javier Oriol Correas Sanchez Cuesta](https://www.linkedin.com/in/javier-correas-sanchez-cuesta-15289482/) 

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/javitocor/Events-API-Express/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments 🚀

- [Express Documentation](https://expressjs.com/)
- [Passportjs](http://www.passportjs.org/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoosejs](https://mongoosejs.com/docs/guides.html)

## 📝 License

This project is [MIT](lic.url) licensed.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/javitocor/Events-API-Express.svg?style=flat-square
[contributors-url]: https://github.com/javitocor/Events-API-Express/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/javitocor/Events-API-Express.svg?style=flat-square
[forks-url]: https://github.com/javitocor/Events-API-Express/network/members
[stars-shield]: https://img.shields.io/github/stars/javitocor/Events-API-Express.svg?style=flat-square
[stars-url]: https://github.com/javitocor/Events-API-Express/stargazers
[issues-shield]: https://img.shields.io/github/issues/javitocor/Events-API-Express.svg?style=flat-square
[issues-url]: https://github.com/javitocor/Events-API-Express/issues