# _Pierre's Luxury Kombucha_

#### _A Basic Online Kombucha Bewery Menu and Inventory System, November 15th, 2019_

#### _By **Jennifer Batara**_

## Description

This application is a React web application that incorporates two views: a patron view and an employee view. Patrons are able to see a menu sort items by price, flavor profile, or name. Employees are able to sort kegs by pints left, price, and flavor profile. Employees are also able to add new kegs and edit a keg's properties.

## User Stories
- As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
- As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
- As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
- As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
- As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
- As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
- As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
- As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

## Client Side Routing and Component Design


## Setup/Installation Requirements

-   Internet Connection
-   Internet browser
-   Bash Terminal
-   Node.js
-   Node Package Manager (npm)

If you do not have the Node.js installed on your computer, please install it by following the directions for your operating system [here](https://nodejs.org/). The Node.js version used for this project is v10.16.0. NPM is installed with Node.js. The current version of npm used for this project is v6.11.3. If you need npm support, visit npm's website [here](https://www.npmjs.com/get-npm).


To view locally please copy the link to [this repo](https://github.com/jbatara/PierresLuxuryKombucha) and type the following command into your Bash terminal:
```
$git clone repo_url
```

with repo_url being the url that was just copied. To open the console app, navigate to the local directory which the online repository was cloned to using the command

```
$cd PierresLuxuryKombucha
```

Once in the correct repository, and confirming that you have Node.js installed, install the required dependencies using the following command
```
$npm i
```

Once npm has restored the required dependencies, run the app with the command
```
$npm run start
```
Navigate to the [local host link](https://localhost:8080) and enjoy!


## Known Bugs

_There are currenly no bugs reported._

## Support and contact details

Please feel free to contact the developer by raising a new [issue](https://github.com/jbatara/PierresLuxuryKombucha/issues/new) on the github repo. You can browse the current issues [here](https://github.com/jbatara/PierresLuxuryKombucha/issues).

## Technologies Used

* Javascript
* Node.js
* React
* Webpack

### License

_MIT_

Copyright (c) 2019 **_Jennifer Batara_**


