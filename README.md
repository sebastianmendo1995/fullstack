# FullStack Project

Peerspaces is a fullstack web applocation clone. On a high level, Peerspace is a Rails API connected to a PostgreSQL DB, serving data to a React & Redux frontend. This application is hosted on Heroku and static data is served from AWS. Also use Google API such Google Maps and Google Geolocation.

![App preview](https://github.com/sebastianmendo1995/fullstack/blob/master/app/assets/images/spaces.png)

You can test this project [here](https://fullstack-peerspace.herokuapp.com/#/)

# Setup and Installation 

This project require the following local enviroment:

* ruby 2.5.1
* node v10.13.0
* rails 5.2.4.1
* PostgreSQL

## Setup

Run the following commands:

```
npm install
bundle install
bundle exec rails db:create
bundle exec rails db:seed
```

## Development

Initialize the server (dev runs on port 3000)

```
rails s
```

Frontend

```
npm start
```

# Technologies

Peerspace has a React frontend, with state managed by Redux. React implements a Virtual DOM which allows for efficient DOM manipulation, re-rendering only the right elements that need to be re-render, all the while exposing a component lifecycle which we can hook into and use to run code at specific moments. Redux enables us to keep state contained in a central store from which components can pick and choose the slices of state that concerns them. This avoids the need to thread state through components.

# Dev Notes

In this section, I highlight some challenges presented to me over the course of this project.
