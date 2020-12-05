# Agoora One
## Setup
### Node Version
Please use node `^12`.\
Currently, Sequelize currently does not work on node `>= 14`.\
Version subject to be upgraded after that's fixed.

### Package Manager

This project uses `yarn`. If it's not installed already, please 
[install it](https://classic.yarnpkg.com/en/docs/install).

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

## Running the Server on Local

If the db servers are not running, run

```bash
yarn cockroach-start-nodes
```

To start the dev server, run

```bash
yarn dev
```

To stop the dev server, press `CTRL+C`.

## Code Style
In order to enforce consistency, code style for this project is designed to be as restrictive as possible. 
Some notable exceptions from common practices:

- 4 space indentations
- prefer double quotes
- always use braces around the function body
- keys and values are aligned, on the colon, wth at least one space before and after the colon
	- except for json files
- maximum 1 statement per line
- imports, keys, and variables should be sorted

For more details, please see the [eslintrc config](.eslintrc.json).