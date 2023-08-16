# Livescore

<img width="1000" alt="截圖 2023-07-19 下午2 53 32" src="https://github.com/phoenix850508/livescore/assets/121414639/3cb5cd01-8558-442d-839d-ed7460341d3e">

## 🏀 Introduction

This side project is built for sports fans to subscribe their favorite teams, and get real-time match information on all sports.

Currently this project is still on the fly, therefore, the score shown may not be correct on the day. However, as I'm really excited to build this project, soon the APIs will be connected, and all the dummy data will be removed in all pages.

[The App is in production on heroku](https://livescore-83864383907c.herokuapp.com)
<br />(currently mlb games only available on 2023/07/18 as it's in dummy data)

## Features ( 🚧 means the feature is still on the fly)

A simple version of a livescore web application, the features can be categorized into 6 main chunks:

- User can view all matches on the date selected (currently the MLB dummy data only shows 18th of July, only NBA is connected with API in realtime) 🚧
- User can subscribe a team from main page, when the bell turns solid, it means you've successfully subscribed the team. And when you click the top right side of the page "Favorites", you will see only the teams that you subscribed on the date
- User can access the detail of the match by clicking the right section "Featured Match", and view the details of the match
- User can access differnt leagues, by clicking one of the country in the All Leagues section, and select a league of your choice
- User can view a certain team from by clicking the team logo in the matchinfo page
- User use the seatch bar to search for particular team or league

## Installation

1. Please ensure that Node.js and npm are well installed in your local environment.
2. Find a folder where you want to put this project, open Terminal, and run the command for cloning. Enter:
   <br /> `git clone https://github.com/phoenix850508/livescore-production`
3. Open your terminal, and change the directory to the livescore folder. Enter:
   <br /> `cd livescore-production`
4. Run the command to install all necessary npms. Enter:
   <br /> `npm install`
5. Run the proxy server to enable api request. Enter:
   <br /> `node backend/server.js`
6. You should see `Express app listening at http://localhost:3001`, open the browser and enter `Express app listening at http://localhost:3001` to see the page
7. Press "ctrl + c" in Terminal if you want to stop running the project.
