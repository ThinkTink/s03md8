# Finance App Work Simulation

Welcome to the JavaScript (Node.JS) Finance App work simulation by [Hatchways](http://hatchways.io/). In this project, you will be writing a couple of back-end API routes on a Node/Express back-end API. 

We will use [this rubric](https://drive.google.com/file/d/17p8-OdTxKF8bhCn_YwpQ4UPBIh13bDOo/view?usp=sharing) to evaluate your submission. Please note that if your submission does not attempt to complete all of the requirements, or does not pass our plagiarism screening, we will be unable to provide feedback on it. Please contact hello@hatchways.io if you have any questions or concerns.

Below is some high level detail about the project. Good luck!

## Language & Tools

- [NodeJS](https://nodejs.org/en/) - we recommend using v16
- [Express](https://expressjs.com/) - web framework
- [Sequelize](https://sequelize.org/) and [SQLite](https://www.sqlite.org/) for the database (you will not be required to write any database queries in order to complete this project)
- [SuperTest](https://github.com/visionmedia/supertest#readme)
- [Jest](https://jestjs.io/)

## Tips

### Provided functions

The project contains helper functions you can use to complete your tasks without writing any SQL or ORM logic:

- `Account.getAccountsByUserId` in the [models folder](./models/account.js) can be used to fetch all account details
- `Transaction.getTransactionsForRange` in the [models folder](./models/transaction.js) can be used to fetch transaction data by date

### Seed data

We've included sample data that the application has been configured to use. For more information on how the database is set up, please reference [Database](#Database).

## Quickstart

This section contains all the information required for getting the server up and running.

### Environment

Create a `.env` file in this directory, and copy the contents from [.env.sample](./.env.sample).

### Installing Dependencies

Install the required dependencies by running `npm install`

### Run the server

`npm run dev` - launches the express server in debug mode (with hot-reloading) on port 8080.

### Testing Routes

#### Example cURL Commands

You can log in as the seeded account with the following command:

```bash
curl --request POST 'localhost:8080/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.com",
    "password": "sample"
}'
```

You can then use the token returned from the `/api/login` request to make an authenticated request to get the user:

```bash
curl 'localhost:8080/api/user' \
--header 'Authorization: Bearer YOUR-TOKEN-HERE'
```

### Unit tests

`npm run test` - runs all the tests with [jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest#readme). We've provided you with a few example tests and some fixtures to get you started.

#### Adding your own tests

If a ticket requires it, you can add a new test file to the `tests` folder. Ensure any new test files follow the naming format of `a_unique_name.test.js`

### Formatting

`npm run lint` will lint and format your code using [eslint](https://eslint.org/).

## Database

**Note: No database setup should be required to get started with running the project.**

This project uses SQLite, which stores your tables inside a file (`database.db`) for development, and uses an in-memory database for testing.

#### Resetting the Database

If you would like to reset your database, you can run `npm run seed`

## Common Setup Errors

If you encounter an error related to `secretOrPrivateKey` when attempting to make a request, please ensure you have created a .env file in this directory as per the [Environment](#environment) instructions.
