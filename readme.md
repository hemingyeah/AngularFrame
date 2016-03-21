## Usage

### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/hemingyeah/AngularFrame`
2. Install the NodeJS dependencies: `sudo npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8080](http://localhost:8080).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `app` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.