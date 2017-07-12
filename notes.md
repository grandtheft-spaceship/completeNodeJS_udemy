# Complete NodeJS Developer Course
### What is Node?

* The creators of Node took JavaScript and let it run on our machine in a stand-alone process. This means we don't need to use a browser
* Node and the JS that gets executed in a browser both run on **Chrome's V8 JavaScript Runtime Engine**
  * This engine compiles our JS code into faster, low-level machine code
  * This makes Node extremely fast
  * The V8 engine is built in C++
* Node vs the Browser
  * In the browser, the global object is called **window**
  * In node, the global object is called **global**
  * In the browser, we have the **document** object available
  * In node, we have the **process** object available

### Why Should I Use Node?

* Node uses an event-driven, non-blocking I/O model that makes it lightweight and efficient
  * **Non-blocking I/O** - Multiple requests can be made without interference from each other
  * **Blocking** - all I/O actions happen in order; an action must be completed before the next one can be executed
  * **Non-blocking** - we start events by attaching callbacks; the callbacks can be executed at a later time
  * In node, the **event loop** attaches listeners for events to finish, then executes the callback function
  * Node is **single-threaded**; this means that our application runs on one, single thread
* Node.js' package ecosystem, **npm**, is the largest ecosystem of open source libraries in the world

## Node.js Fundamentals (Note App)
### Using Require
[Node.js Docs](http://nodejs.org/api)
  * Complete list of Node.js modules

* **Modules** are units of functionality
* **require** is a function that lets us load libraries/files in applications
* **app.js** - initialization file for application
* **const fs = require('fs');** - here, we are fetching all the contents of the 'fs' module and storing it within the constant 'fs'

### Requiring Your Own Files

* **module** - variable available in every node file
* **exports** - an object on the module property that allows us to store properties on the modules themselves
  * The real goal of **exports** is to be able to export **functions** we can use in other files
  * NOTE: if you use **arrow functions**, they will NOT bind the 'this' keyword  or **arguments array**

### Using 3rd Party Modules

* To download packages using npm and include them in your application
* First, in working directory, type **$ npm init** and cycle through the questions
  * This will create a **package.json** file in our application
    * This is where we define our third-party modules
`$ npm install lodash --save`
  * The **--save** flag will update our package.json file and include the newly installed module
  * You should see the new module included in the directory **node_modules**
    * **node_modules** - directory should not be included in GitHub or altered ever
    * If you delete it or don't have it from a newly cloned repo, you just need to run **npm install**
* **Lodash** - provides utility functions for working with arrays, numbers, strings, etc.

### Restarting App with Nodemon

* **Nodemon** - npm module that watches the application for changes and **restarts the app** when changes occur
  * This is a **command-line utility**
  * **$ npm install nodemon -g**
    * The **-g** flag here stands for **global** and will install the package as a utility on our machine
    * This means that it will not get added to our specific project; it won't be in node_modules or package.json
    * You can shut-down nodemon by pressing **Ctrl + C**

### Getting Input from User

* We can pass **command-line arguments** to get user input from the terminal
* These arguments are accessed on the **process** object's **argv** property
  * **console.log(process.argv)**
    * **argv** - arguments vector // it is more like an arguments array in JavaScript

### Simplified Inout with Yargs

* **Yargs** - able to build interactive command-line tools by parsing arguments and generating an elegant user interface
* Contains it's own version of the **argv** variable
* Yargs allows command-line arguments to be written as **key-value pairs** and will store it as such
* We can define **an entire object that gets set to module.exports**
  * In ES6, if the key and value are the same, we only have to write the key
  **$ node app.js add --title="Hello" --body="world"**

### Working with JSON

* JSON using **string** because strings are simply text and they are supported everywhere
  * Strings is JSON are wrapped in **double quotes**
* JSON does allow other primitives to be used also, but the entire *object* will still be wrapped in quotes
* **JSON.stringify()**
* **JSON.parse()**
* **fs.writeFileSync(*newfile.json*, *data*)**
* **fs.readFileSync(*newfile.json*)**

### Adding and Saving Notes

* **try / catch statement**
```
  try {
    *code that may or may not throw an error goes here*
  } catch(error) {
    *code will only run here if try block fails*
  }
```
* You don't need to put any code in the catch block, but you do need to ALWAYS DEFINE the catch block
* **filter()** - array method
* In ES6, if you use an **arrow function** with only one line of code, you can **exclude the curly braces** and put the logic after the fat arrow
  * The expression will also be automatically **returned**
```
  array.filter(() => console.log(someting));
```

### Refactoring For Reusability
