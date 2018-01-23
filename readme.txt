// ==========
// COMMANDS
// ==========

yarn global add live-server
or
npm install -g live-server (better this one)

// to run server
live-server public

// installing BABEL
npm install -g babel-cli@6.24.1

// BABEL
// is used for compiling new code versions eg. ES6, JSX into old code version that is understandable by browser
// so browser can read it 

// yarn lock should not be changed

// in src/ we place app.js with JSX
// in public/ we place app.js with templates - index.html is gonna use it


babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch  -> will detect changes in src/app.js it will change public/app.js
// if above is canceled we need to restart it first by:
yarn install

// TERNARY OPERATOR
// if true then case1 else case2
// true ?       'Andrew' : 'Anonymous'

// LOGICAL AND OPERATOR
// true && "some age"; //"some age"
// false && "some age"; //false

// for uninstalling babel-cli and live-server use:
npm uninstall -g babel-cli live-server
or
yarn global remove babel-cli live-server

// LOCAL INSTALLATION //
npm install live-server
npm run serve

// installing BABEL
npm install babel-cli@6.24.1
npm install babel-core@6.25.0
npm install babel-loader@7.1.1
or 
yarn add babel-loader@7.1.1
npm run build-babel

then we need to add "scripts" to package-json

// webpack
npm install webpack@3.1.0
npm run build

// validator
npm install validator@8.0.0

// webpack dev server
yarn add wepack-dev-server@2.5.1
yarn run dev-server

// react-modal
yarn add react-modal@2.2.2

!!
yarn run dev-server