[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```console
$ npm install -g express-generator@4
```

  Create the app:

```console
$ express /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```console
$ npm install
```

  Start the server:

```console
$ npm start
```

  View the website at: http://localhost:3000

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, websites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/tj/consolidate.js),
  you can quickly craft your perfect framework.

## Examples

  To view the examples, clone the Express repo and install the dependencies:

```console
$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
```

  Then run whichever example you want:

```console
$ node examples/content-negotiation
```

## Contributing

  [![Linux Build][github-actions-ci-image]][github-actions-ci-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

The Express.js project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, additional
tests, triaging incoming pull requests and issues, and more!

See the [Contributing Guide](Contributing.md) for more technical details on contributing.

### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install
$ npm test
```

## People

The original author of Express is [TJ Holowaychuk](https://github.com/tj)

The current lead maintainer is [Douglas Christopher Wilson](https://github.com/dougwilson)

[List of all contributors](https://github.com/expressjs/express/graphs/contributors)

## License

  [MIT](LICENSE)

[appveyor-image]: https://badgen.net/appveyor/ci/dougwilson/express/master?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://badgen.net/coveralls/c/github/expressjs/express/master
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[github-actions-ci-image]: https://badgen.net/github/checks/expressjs/express/master?label=linux
[github-actions-ci-url]: https://github.com/expressjs/express/actions/workflows/ci.yml
[npm-downloads-image]: https://badgen.net/npm/dm/express
[npm-downloads-url]: https://npmcharts.com/compare/express?minimal=true
[npm-url]: https://npmjs.org/package/express
[npm-version-image]: https://badgen.net/npm/v/express


<p align="center">
  <img src="https://raw.githubusercontent.com/sequelize/sequelize/main/docs/images/logo-small.png" width="100" />
  <h1 align="center">Sequelize</h1>
</p>

[![npm version](https://badgen.net/npm/v/@sequelize/core)](https://www.npmjs.com/package/@sequelize/core)
[![Build Status](https://github.com/sequelize/sequelize/workflows/CI/badge.svg)](https://github.com/sequelize/sequelize/actions?query=workflow%3ACI)
[![npm downloads](https://badgen.net/npm/dm/@sequelize/core)](https://www.npmjs.com/package/@sequelize/core)
[![contributors](https://img.shields.io/github/contributors/sequelize/sequelize)](https://github.com/sequelize/sequelize/graphs/contributors)
[![Open Collective](https://img.shields.io/opencollective/backers/sequelize)](https://opencollective.com/sequelize#section-contributors)
[![sponsor](https://img.shields.io/opencollective/all/sequelize?label=sponsors)](https://opencollective.com/sequelize)
[![Merged PRs](https://badgen.net/github/merged-prs/sequelize/sequelize)](https://github.com/sequelize/sequelize)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sequelize is an easy-to-use and promise-based [Node.js](https://nodejs.org/en/about/) [ORM tool](https://en.wikipedia.org/wiki/Object-relational_mapping) for [Postgres](https://en.wikipedia.org/wiki/PostgreSQL), [MySQL](https://en.wikipedia.org/wiki/MySQL), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQLite](https://en.wikipedia.org/wiki/SQLite), [DB2](https://en.wikipedia.org/wiki/IBM_Db2_Family), [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server), and [IBM i](https://www.ibm.com/support/pages/db2-ibm-i). It features solid transaction support, relations, eager and lazy loading, read replication and more.

Sequelize follows [Semantic Versioning](http://semver.org) and the [official Node.js LTS schedule](https://nodejs.org/en/about/releases/). Version 7 of Sequelize officially supports the Node.js versions `^12.22.0`, `^14.17,0`, `^16.0.0`. Other versions might be working as well.

New to Sequelize? Take a look at the [Tutorials and Guides](https://sequelize.org/master). You might also be interested in the [API Reference](https://sequelize.org/master/identifiers).

Would you like to contribute? Read [our contribution guidelines](https://github.com/sequelize/sequelize/blob/main/CONTRIBUTING.md) to know more. There are many ways to help! 😃

### :pencil: Major version changelog

Please find upgrade information to major versions here:

- [Upgrade from v5 to v6](https://github.com/sequelize/sequelize/blob/main/docs/manual/other-topics/upgrade-to-v6.md)
- [Upgrade from v6 to v7](https://github.com/sequelize/sequelize/blob/main/docs/manual/other-topics/upgrade-to-v7.md)

## :money_with_wings: Supporting the project

Do you like Sequelize and would like to give back to the engineering team behind it?

We have recently created an [OpenCollective based money pool](https://opencollective.com/sequelize) which is shared amongst all core maintainers based on their contributions. Every support is wholeheartedly welcome. ❤️

## :computer: Installation

### Installation of v6 (current stable version)

```sh
# using npm
npm i sequelize
# using yarn
yarn add sequelize
```

### Installation of v7 (next-gen alpha version)

```sh
# using npm
npm i @sequelize/core
# using yarn
yarn add @sequelize/core
```

```sh
# Libraries used for supported dialects are:
# using npm
npm i pg pg-hstore # PostgreSQL
npm i mysql2 # MySQL
npm i mariadb # MariaDB
npm i sqlite3 # SQLite
npm i tedious # Microsoft SQL Server
npm i ibm_db # DB2
npm i odbc # IBM i
# using yarn
yarn add pg pg-hstore # PostgreSQL
yarn add mysql2 # MySQL
yarn add mariadb # MariaDB
yarn add sqlite3 # SQLite
yarn add tedious # Microsoft SQL Server
yarn add ibm_db # DB2
yarn add odbc # IBM i
```

## :book: Documentation

- [Latest Version Documentation (v7)](https://sequelize.org/v7)
- [All Documentation Versions](https://sequelize.org)
- [Contributing](https://github.com/sequelize/sequelize/blob/main/CONTRIBUTING.md)

## :warning: Responsible disclosure

If you have security issues to report, please refer to our [Responsible Disclosure Policy](https://github.com/sequelize/sequelize/blob/main/SECURITY.md) for more details.

## :book: Resources

- [Changelog](https://github.com/sequelize/sequelize/releases)
- [Discussions](https://github.com/sequelize/sequelize/discussions)
- [Slack Inviter](http://sequelize-slack.herokuapp.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/sequelize.js)

### :wrench: Tools

- [CLI](https://github.com/sequelize/cli)
- [With TypeScript](https://sequelize.org/master/manual/typescript.html)
- [Enhanced TypeScript with decorators](https://github.com/RobinBuschmann/sequelize-typescript)
- [For GraphQL](https://github.com/mickhansen/graphql-sequelize)
- [For CockroachDB](https://github.com/cockroachdb/sequelize-cockroachdb)
- [Plugins](https://sequelize.org/master/manual/resources.html)
- [For YugabyteDB](https://github.com/yugabyte/sequelize-yugabytedb)

### :speech_balloon: Translations

- [English](https://sequelize.org/master) (OFFICIAL)
- [中文文档](https://github.com/demopark/sequelize-docs-Zh-CN) (UNOFFICIAL)
