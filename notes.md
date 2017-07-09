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
