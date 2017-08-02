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
* `$ npm install lodash --save`
  * The `--save` flag will update our package.json file and include the newly installed module
  * You should see the new module included in the directory `node_modules`
    * `node_modules` - directory should not be included in GitHub or altered ever
    * If you delete it or don't have it from a newly cloned repo, you just need to run `npm install`
* **Lodash** - provides utility functions for working with arrays, numbers, strings, etc.

### Restarting App with Nodemon

* **Nodemon** - npm module that watches the application for changes and **restarts the app** when changes occur
  * This is a **command-line utility**
  * `$ npm install nodemon -g`
    * The `-g` flag here stands for **global** and will install the package as a utility on our machine
    * This means that it will not get added to our specific project; it won't be in node_modules or package.json
    * You can shut-down nodemon by pressing `Ctrl + C`

### Getting Input from User

* We can pass **command-line arguments** to get user input from the terminal
* These arguments are accessed on the **process** object's **argv** property
  * **console.log(process.argv)**
    * **argv** - arguments vector // it is more like an arguments array in JavaScript

### Simplified Inout with Yargs

* **Yargs** - able to build interactive command-line tools by parsing arguments and generating an elegant user interface
* Contains it's own version of the `argv` variable
* Yargs allows command-line arguments to be written as **key-value pairs** and will store it as such
* We can define **an entire object that gets set to module.exports**
  * In ES6, if the key and value are the same, we only have to write the key
  * `$ node app.js add --title="Hello" --body="world"`

### Working with JSON

* JSON using **string** because strings are simply text and they are supported everywhere
  * Strings is JSON are wrapped in **double quotes**
* JSON does allow other primitives to be used also, but the entire *object* will still be wrapped in quotes
* `JSON.stringify()`
* `JSON.parse()`
* `fs.writeFileSync(*newfile.json*, *data*)`
* `fs.readFileSync(*newfile.json*)`

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
* `filter()` - array method which **returns an array where condition is true**
* In ES6, if you use an **arrow function** with only one line of code, you can **exclude the curly braces** and put the logic after the fat arrow
  * The expression will also be automatically **returned**
```
  array.filter(() => console.log(someting));
```

### Refactoring For Reusability
### Removing a Note
### Reading Notes and Reusability
### Debugging Node.js Applications
* **Debeug mode** from the terminal
  * Program has not started running
* `$ node inspect file_path/file.js`
  * In debug mode, there are navigation commands you can use
  * `list(number)` - prints number of lines you specified above and below the current place where code is paused
  * `n` - lets you move on to the next statement
  * `c` - continues program until the end
* To leave debug mode and debug(*test out code*), type `repl`
  * In **repl** mode, you have access to the application at the current state where you are paused at
* **debugger** statement can also be used
  * In program, you use `debugger` keyword at the point of the program you want to pause or break
  * You still need to run the file with the **inspect** keyword `$ node inspect file_path/file.js`
  * You can also run the program with **nodemon** `$ nodemon inspect file_path/file.js`

### Debugging via Chrome Dev Tools

* `$ node --inspect-brk`
  * Tells node we want to run **inspect mode** but we DON'T want to connect via the command line
  * You can also use nodemon
* In a Chrome browser - **chrome://inspect**
  * Click **Open dedicated Dev Tools for Node**
* To continue throughout the program, you can use the blue play button on the right panel
* With this method, you would still want to use the **debugger** keyword in your file

### Listing Notes
### Requiring Arguments and Advanced Yargs
[Yargs Docs](https://www.npmjs.com/package/yargs)

* `.command()` - method used to configure commands for yargs
  * Takes 3 arguments - **command, description, and options object**
  * **options** object - each key will be property name and the value will be another object that specifies how that property should work
    * The **value object** has 3 key-value pairs:
      * **describe** - a short description
      * **demand** - defaults to **false**, so you can set it to true to make it required
      * **alias** - allows you to set new flag, example: `--title` -> `-t`
* `.help()` - now able to use the `--help` flag to see all available options and arguments for a command

### Arrow Functions

* **Statement syntax**
```
var functionName = () => {
  *logic goes here*
}
```
* **Expression syntax** - used to simply **returning** an expression
```
var functionName = () => *logic goes here* ;
```
* Arrow functions DON'T bind **this** keyword
* Arrow functions' **arguments** variable points to **global variable object**
  * Standard function **arguments** variable returns an object with function's arguments

## Asynchronous Node.js (Weather App)
### Async Basics

* `setTimeOut(callback, milliseconds)` - node function that provides asynchronous action

### Call Stack and Event Loop

* The **call stack** is a simple *data structure* that keeps track of *program execution* in V8
  * It tracks the functions that are currently executing and the statements that are fired
  * The call stack can only **run one thing at a time**
  * The call stack is a simple data structure that allows you to do 2 things:
    1. You can **add** something to the top of it
    2. You can **remove** the top item
  * When your program being running, everything gets wrapped around by the ``main()`` function
  * When you *call a function*, it gets **added on top of the call stack**
  * When you *return from a function*, it gets **removed from the call stack**

* When we use *node functions*, like `setTimeOut()`, the **event callback pair** gets registered in the **node apis container**
* The **callback queue** is where the callback functions from the event callback pairs waiting in the node apis container get stored
  * The callback functions wait here until the **call stack is empty**
* The **event loop** is the link between the call stack and the callback queue (the `main()` function also needs to be completed and removed from the call stack)
  * It checks the call stack to see if its empty; if it is, it will move the top callback function from the callback queue into the call stack

### Callback Functions & APIs

* Google Geocode API
```
https://maps.googleapis.com/maps/api/geocode/json?address=757 Market St San Francisco
```
* **?** - query string
* In the browser, white spaces don't matter; in Node, white spaces do matter
* **Request module** - you can make these kinds of HTTP requests inside of application
  * [Request Module Docs](https://npmjs.com/package/request)

### Pretty Printing Objects

* If you simply `console.log(body)`, JS will *clip* the data because there are so many objects nested within each other
* To fix this, you can do `console.log(JSON.stringify(body, undefined, numberOfSpaces))`
  * `JSON.stringify` - converts JS objects and turn them to JSON strings
  * The first argument is our object
  * The second argument is a **filter**, but you can set it to `undefined`
  * The third argument is the number of spaces for indentation

### What Makes Up an HTTP Request?

* The **body** contains the actual data that you'd want from the URL
* The **response** contains more information regarding the response/request cycle than the **body**
  * *Headers, Request, Status Code, and Body are some of the things in the Response object*
* The **error** argument will contains errors in the **error object** when attempting to make a request

### Encoding User Input

* `encodeURIComponent(string)`
* `decodeURIComponent(encodedString)`

### Callback Errors
* The `if/else` statements within the callback lets us check certain properties to determine whether or not the call(*request*) should be considered a success or a failure
  * We can check against **response codes** to determine if the request is a success or a failure
* We can have **machine errors**, like being unable to connect to a network - which usually shows up in the **error object**, OR we can get errors from the **Google server** - like inputting an invalid address
  * When we pass in *bad data*, such as an invalid address, we'll see something like this:
  ```
  {
    results: [ ],
    status: "ZERO_RESULTS"
  }
  ```
    * Here, we would use something like the *status text value* to determine if our request was successful or not

* By using the **status property** and the **error object**, we can determine exactly what to do *inside the callback*

  1. Check *IF the error object exists**; if there is an error, we'll log a message to the screen
    * *~> Problem with connection to Google servers*
  2. *ELSE IF*, we'll check the *if status property ==== 'ZERO_RESULTS'*
    * *~> User input invalid data*
    * **NOTE**, the `status` property we are checking is **specific to the Google Geocoder API**, it is not included with every API
      * When exploring new APIs, it's important to test out different kinds of data, both good and bad, to check what kind of responses you should be expecting
  3. *ELSE IF*, we'll check if *status property === 'OK'* and we'll display the intended results

* **NOTE:** when we pass in *invalid data* the **error object DOES NOT get populated** because `request` does not technically see that as an error
  * It is actually located in the `response` object, which is why we have to use `body.status` in order to access the value

### Abstracting Callbacks

* In a **relative path**, if the *targeted file has a .js extension*, you can leave it off in the statement
* The goal of refactoring our code was NOT to get ride of the callback; the goal was to *abstract all the complex logic related to encoding the data, making the request, and checking for errors*
  * `app.js` should not be responsible for all of those actions; it shouldn't even need to know that an HTTP request was ever made
  * `app.js` should only care about passing an address to the function and doing something with the result being either an error message or the data in the formatted address - the latitude and longitude
* The callback we pass to `geocodeAddress()` is going to get called AFTER the request comes back
  * The callback will take two arguments:
    * `errorMessage` - which is a string
    * `results` - which contains the address - the latitude and longitude
    * **NOTE:** Only either `errorMessage` OR `results` can be available at a time
      * If we have an error message, we're NOT going to have results
      * if we have results, we're NOT going to have an error message
    * This allows us to use an `if/else` statement to determine if our call was successful or not
    * We use `JSON.stringify()` to *pretty print* `results`
      * We also pass in `undefined` to skip over the *filtering function*, which we don't need
      * the `2` specifies our *spacing*; which is going to format the results
  * When we define `geocodeAddress`, we pass in a `callback` argument along with an `address` argument
    * We then *call the callback* inside each of the 3 `if/else if` blocks
    * Instead of calling `console.log()`, we simply call the `callback` with the string
      * The string is going to be the `errorMessage` that we implemented in `app.js`
    * The last `else if` statement is different because we DON'T have our *object* and we also need to create an `undefined` variable for the first argument since an error message is NOT going to be provided when the call is successful
      * To create an `undefined` error message, we call `callback`, passing an `undefined` as the first argument
      * Then, we can specify our object as the second argument
        * This *object* is going to be our `results`
          * `results` has **3 properties**:
            * `Address`
            * `Latitude`
            * `Longitude`

### Wiring Up Weather Search

* [Dark Sky API](https://darksky.net/dev/)
* **Forcast Request**
  * `https://api.darksky.net/forecast/[key]/[latitude],[longitude]`
    * Returns a lot of information; but what we care about is the `currently` object; which stores all the current weather information
* We're going to use the **request library** by declaring a `const request` which **equals** `require('request')` library
  * Now we can make an actual request, similar to `geocoder` API
  * `request()` is a function that takes two arguments
    * The **options** object
      * Contains `url` - The URL we make the request from
      * `json: true` - tells the **request** library to *parse the body as JSON*
    * A **callback** function that gets fired *once the HTTP request finishes*
      * Takes 3 arguments:
        * `error`
        * `response`
        * `body`

### Chaining Callbacks Together
