# node-tests
Testing Applications (Code testing & Debugging)
Mocha Basic Testing
Watch and Auto Restart Tests
Using Assertion Library
Testing Assertion Library
Testing Asynchronous Code
Testing Express Applications
Organizing Test with Describe()
Test Spies

    Mocha and Basic Testing
        - Setting up test cases
        - Verify program is doing what it says
        - Process
            - New directory
            - npm init
            - Open directory in text editor - node-tests
            - utils folder in node-tests
            - utils.js in utils
            - Adding function added
        - Using Mocha framework
            - mochajs.org
            - npm install mocha --save-dev
                - --save-dev saves module for development purposes only!
            - Create 'utils.test.js' - .test.js is test file
            - Create test case using 'it('string', function(){});' function
                - First string arg is what the test should do
                - Function should include code to test add function
                    -   var res = utils.add(33,11);
            - Import utils
            - Adjust package.json for testing
                -   'scripts': {
                        'test': 'mocha **/*.js.test'
                    },
                    - Uses mocha to run any file with .js.test extension
            - Run tests with 'npm test'
                - Test only fails if error is thrown

    Watch and Auto Restart Test
        - nodemon normall runs app.js
        - Can run any commmands using nodemon --exec 'npm test'
        - Can create npm command in package.json
            -   "scripts": {
                    ...
                    "test-watch": "nodemon --exec 'npm test'"
                }
            - run with 'npm run test-watch'

    Using an Assertion Library
        - Let us make assertions about functions, test those assertions
        - Expect by mjackson
            - expect(value).toExist(); --> Value is truthy
            - expect(value).toBe(); --> Equals
            - expect(value).toBeA(string) --> to be a type defined by string
            - See other assertions on web page
            - Can chain assertions, too.

    Testing Asyncronous Code
        - Not much different.
        - Add done parameter to it() function argument, call when assertions should be made
            -   it('should async add two numbers', (done) => {
                    utils.asyncAdd(4, 3, (sum) => {
                        expect(sum).toBe(7).toBeA('number');
                        done();
                    });
                });

    Testing Express Applications - Part I
        - Setting up an Express app to be tested in the next section

    Testing Express Applications - Part II
        - Using Supertest to test Express
            - Built by same people who built Express
            - Should make testing Express super simple
        - Install using 'npm i supertest --save-dev'
        - Create server.test.js file
        - Import using require('supertest');
        - Import Express app
            -   module.exports.app = app; // in Express app file
            -   var app = require('./appfile.js').app // in test file
        - Use mocha to initiate test, use Supertest to make assertions
            -   request(app)                // make a request to the app
                    .get('/')               // get home index
                    .expect(200)            // number refers to status code
                    .expect('hello world')  // string refers to response body
                    .end(done);             // ends both supertest and mocha 
                                            // tests
                    
            -   require('expect'); to make
                    .expect((res) => {
                        expect(res.body).toInclude({
                            error: 'Page not found.'
                        })
                    }) // Assert body content

    Organizing Tests With describe()
        - should group together tests
        - describe(string, callback)
            - string names the block of tests
            - callback contains the related tests
            - can be nested to form subsets

    Test Spies
        - Spies let you swap out a real function for a testing utility
            -   var spy = expect.createSpy()
            -   expect(spy).assertions...
                    - toHaveBeenCalled()
                    - toHaveBeenCalledWith()
        - To test functions used in test files, going to use rewire
            - Install and load in normally
            - Use rewire instead of require when loading in the file you want to mock out
            -   var app = rewire('./app');
            - addss app.__get__ and app.__set__ functions
            -   var db = {
                    saveUser: expect.createSpy()
                };
                app.__set__)('db', db);
            -   it('should call saveUser with user object', () => {
                    var email = 'disruptive@example.com';
                    var password = '123abc';

                    app.handleSignup(email, password);
                    expect(db.saveUser).toHaveBeenCalledWith({email, password});
                });
