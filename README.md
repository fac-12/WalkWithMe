
# Walk With Me  :cat: :dog:
## An app to match pets with people who want to walk them

### Do you need someone to walk your pet? Or do you want to take a cute animal for a walk? You've come to the right place! :sparkles:

#### User Stories
* As a pet owner, I want to login or register with my pets details and add that they need to be walked
* As a walker, I want to login or register myself and see all the possible pets to walk
* As a walker, I want to choose a pet to walk and be given their email details

#### Stretch Goals
* get the app working on Heroku
* use promises
#### What we've learnt
* how to use cookies with express-session
* serve client side errors and messages with connect-flash
#### What we've struggled with
* using express-session properly READ THE DOCS

### To use the app
* Clone the repo
* Run ```npm i``` once cloned to install our npm modules
    * bcryptjs
    * body-parser
    * compression
    * connect-flash
    * cookie-parser
    * cookie-session
    * express
    * express-handlebars
    * express-session
    * express-validator
    * jsonwebtoken
    * pg
    * serve-favicon

* Create a config.env file in this you'll need
    * DATABASE_URL
    * SECRET
    * TEST_DB_URL
* To run the app on local host ``` npm run dev ```
* To run our test files use ``` npm run testdb ```
