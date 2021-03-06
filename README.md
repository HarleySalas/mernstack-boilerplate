This project is currently incomplete.

## Installation
1. Install dependencies
2. Set env variables

**Install dependencies**

Run <code>npm install</code> at server folder

Run <code>npm install</code> at client folder

**Set env variables - Client**

Create <code>.env.development</code> and <code>.env.production</code> files inside <code>client/</code> folder.

Use port `3002` for development and port `80` for production.

Example (include all of these):

    HOST=0.0.0.0
    PORT=3002
    REACT_APP_HOST=localhost
    REACT_APP_PORT=3001
    SKIP_PREFLIGHT_CHECK=true
    CHOKIDAR_USEPOLLING=true

Located at `client/.env.development`.

Note: if you change the ports change them in the dockerfiles too (root, server).

**Set env variables - Server**

Create <code>test.config.env</code>, <code>development.config.env</code> and <code>production.config.env</code> files inside <code>server/.env/</code> folder.

Use port `3001` for test, development and port `80` for production.

Example (include all of these):

    IP=0.0.0.0
    HOST=localhost
    PORT=3001
    CLIENT_HOST=localhost
    CLIENT_PORT=3002

Located at `server/.env/development.config.env`.

Note: if you change the ports change them in the dockerfiles too (root, server).

## Usage

Note: use the following commands at the root folder.

Development

1. Start <code>docker-compose -f docker-compose.development.yml up</code>
2. Go to <code>https://localhost:3001</code> in browser for server
3. Go to <code>http://localhost:3002</code> in browser for client

Production

1. Run <code>npm run build</code>
1. Start <code>docker-compose -f docker-compose.production.yml up -d</code>
2. Go to <code>https://localhost:80</code> in browser

Note: run `npm rebuild node-sass` inside the client container if asked.

## Docker commands

Using separated docker-compose files for development and production.

**Development**

Start: `docker-compose -f docker-compose.development.yml up`<br>
Stop: `docker-compose -f docker-compose.development.yml down`

**Production**

Start: `docker-compose -f docker-compose.production.yml up`<br>
Stop: `docker-compose -f docker-compose.production.yml down`

## NPM Scripts

If you prefer not to use docker, you can use the following scripts from the root folder:

**npm run dev**

To use this command, you should install concurrently.<br>
It's prepared, just run `npm install` under the root folder.

**npm run dev:client**

Runs the react client in development mode.<br>
The browser will lint, reload if you make edits.

**npm run dev:server**

Runs the node server in development mode.<br>
The server will test, lint and reload if you make edits.

**npm run build**

Builds the complete application for production to the `build` folder.<br>

**npm start**

Runs the app in production mode with PM2 (cluster mode).

**npm stop**

Stops the application instances in PM2.

**npm run delete**

Removes the application instances from PM2.

## License

**The MIT License (MIT)**<br/>
This project was based off of Tamas Szoke's MERN Boilerplate and is adjusted considerably to better suit my purposes.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)