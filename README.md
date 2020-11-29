# Agoora One
## Set Up
### Node Version
Please use node `12`.\
Currently, the highest node version working with this project is version 12.\
postcss is a dependency, and it expects version version `^10 || ^12 || >=14`.\
However, Sequelize currently does not work on version `>= 14`.\
Version subject to be upgraded if both of these problems are taken care of.

### Package Manager

This project uses `yarn`.\
To install node modules, run

```bash
yarn install
```

### Database

This project uses `CockroachDB` with `Sequelize ORM`.\
To set up the initial development db, run

```bash
yarn cockroach-setup
```

This sets up 3 secure CockroachDB nodes on your local.\
With a user `dev` and password `dev`.\
The db is hosted on `localhost:26257`.\
And the console can be accessed through `localhost:8080`.\
More info can be found on the 
[cockroachlabs website](https://www.cockroachlabs.com/docs/v20.2/build-a-nodejs-app-with-cockroachdb-sequelize).\
&nbsp;\
After the initial setup, please kill all 3 nodes through system monitor, since 
[quitting the nodes through console is depricated](https://www.cockroachlabs.com/docs/v20.2/cockroach-quit).\
The nodes will start with the server.

### Running the Server

To run the dev server, run

```bash
yarn dev
```