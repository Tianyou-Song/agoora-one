# Agoora One
## Setup
### Node Version
Please use node `12`.\
Currently, the highest node version working with this project is version 12.\
postcss is a dependency, and it expects version version `^10 || ^12 || >=14`.\
However, Sequelize currently does not work on version `>= 14`.\
Version subject to be upgraded if both of these problems are taken care of.

### Package Manager

This project uses `yarn`.

### Setup Script
To set up the project initially, run

```bash
yarn setup
```

This installs the required node modules and sets up 3 secure CockroachDB nodes on your local.\
The default database is `agoora_one`\
The default user is `dev` and password `dev`.\
The db is hosted on `localhost:26257`.\
And the db console can be accessed through `localhost:8080`.\
More info can be found on the 
[cockroachlabs website](https://www.cockroachlabs.com/docs/v20.2/build-a-nodejs-app-with-cockroachdb-sequelize). 
&nbsp;

After the initial setup, please kill all 3 nodes through system monitor, since 
[quitting the nodes through console is depricated](https://www.cockroachlabs.com/docs/v20.2/cockroach-quit).\
The nodes will start with the server.

## Running the Server on Local

To start the dev server, run

```bash
yarn dev
```

To stop the dev server, press `ctrl+c`.

## Code Style
This project follows mostly [Airbnb style guide](https://github.com/airbnb/javascript) with the following exceptions.

- tab indentations
- prefer double quotes
- always braces around the function body
- keys and values are aligned, on the colon, wth at least one space before and after the colon
	- except for json files
- maximum 1 space per line
- imports, keys, and variables should be alphabetically sorted

For more details, please see the [eslintrc](.eslintrc.json) config