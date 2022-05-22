# Body Path - MS Customer

![GitHub repo size](https://img.shields.io/github/repo-size/igorfollador/bodypath-customer?style=for-the-badge)![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/igorfollador/bodypath-customer?style=for-the-badge)



> Body Path project microservice aimed at user control

## 💻 Requirements

First, verify if you have:

* Install `Node@16.15.0`
* MySQL  `MySQL@8.0` or latest.

## 🚀 Install MS Customer

To install, follow these steps:

```
npm install
```

The commands below refer to database creation, migration and population, respectively:

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

## ☕ How to start MS Customer

After reviewing the configuration file `./src/config/config.json` is correct, just run:

```javascript
npm start
//or
npm run dev
//or
npm run test
```
