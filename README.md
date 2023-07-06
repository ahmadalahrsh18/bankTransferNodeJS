# Simple demo for Monolotic Application
this application demonstrates the implementation of financial transaction from one account to another

## Features
The Application exposes one REST API that transfer money from one account to another

## Technologies Used
- ExpressJS
- PostgreSQL
- NodeJS

## Get Started
- Clone this repository to your local machine.
- Install PostgreSQL 
-  create a database called banktransfer_project.
- Create these two tables in banktransfer_project with the following schemas:

```postgresql
  CREATE TABLE accounts (
      account_number VARCHAR(10) PRIMARY KEY,
      balance DECIMAL(10, 2)
      );
  INSERT INTO accounts (account_number, balance)
  VALUES ('A1', 1000.00),
         ('A2', 500.00);
```
then run the following command
```shell
npm start
```

