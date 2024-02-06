# React + TypeScript + Vite + Node + Express

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Description

This is a site who provide a map to render diferent devices. You can create a new devices on devices. By default, the server app uses MySQL as a DB.

# Getting started

Use the following steps to clone the repository and start the app

1. Clone the repository

```bash
git clone https://github.com/MarianoJimenezPerez/map-app
```

2. Define .env file on server folder with the following keys:

```bash
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
```

3. Install the packages on server folder

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

4. Define .env file on client folder with the following keys:

```bash
VITE_API_BASE_URL=
```

4. Install the packages on client folder

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

# Server scripts

| Script | Descripcion                          |
| ------ | ------------------------------------ |
| dev    | Initiate developer server on nodemon |
| build  | Create a build dist for deployment   |

# Client scripts

| Script | Descripcion                                           |
| ------ | ----------------------------------------------------- |
| dev    | Initiate developer server on port 5173 (vite default) |
| test   | Execute all the tests swites                          |
| build  | Create a build dist for deployment                    |

# Libraries used on project

| Library          | Documentation                         |
| ---------------- | ------------------------------------- |
| Express          | https://expressjs.com/                |
| Sequelize        | https://sequelize.org/                |
| Helmet           | https://www.npmjs.com/package/helmet  |
| Nodemon          | https://www.npmjs.com/package/nodemon |
| Vite             | https://vitejs.dev/                   |
| React            | https://es.react.dev/                 |
| React Router Dom | https://reactrouter.com/en/main       |
| Tanstack Query   | https://tanstack.com/query/latest     |
| Axios            | https://axios-http.com/               |
| Material UI      | https://mui.com/                      |
