# Brewery Project

Display random beer from [BreweryDB](https://www.brewerydb.com/developers). 

## Setup

Install node modules:
```
yarn 
```

Build production version and start project:
```
yarn build
yarn start
```
Go to `http://localhost:3000`

Start dev environment:
```
yarn dev
```
Go to `http://localhost:3000`

## Improvments to be done

* Figure out why Brewery API when using `beer/random` does not return `labels` parameter, that includes images;
* Implement a hook for fetching data, that will include loading/error/data and utilize that;
* Fetch initial beer data on server instead on page loading;
* Brewery data is already included in `beer/{id}` call, so find a way to pass that to the brewery page instead of making another call;
* Configure css modules and use that in some cases as an alternative to styled components;
* Configure jest and add following unit tests: component snapshots, unit tests for fetch functions, unit tests for button;
* Configure cypress for e2e testing and testing flow;
