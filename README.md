# project2-front-end
# Magic Hotel Booking

## Project Description
In this project:
It is a group project of three contributors.
We tried to make a hotel booking system project using Spring Tool Suits for backend and Angular for frontend.
This GitHub repository has only the Angular part.
The link of GitHub repository for the Spring Boot project is ---https://github.com/kmandalusa/project2.git 
This project has a home page with some pictures
New customers can register by providing their credentials.
Existing customers are also available.
Customers can view the room's information.
There is a Login page
It contains a page with booking information.



## Technologies Used


* Java - version 8
* Hibernate - version 5.6.0
* Maven - version 3.0
* Angular 13
* Junit - version 4.12 
* Selenium  
* Cucumber  
* AWS RDS

## Features

List of features ready and TODOs for future development
* Add new customer
* View existing customers
* View hotel rooms details 
* Login page
* Contact informations

To-do list:
* Properly functional login and logout
* Customer can search for available rooms and book accordingly
* Admin page
* Better user interface
* Better error handling mechanism
* I can do more testing

## Getting Started


   
* git clone https://github.com/kmandalusa/project2-front-end.git
* cd project2-front-end
* Before running the project you have to set up database server
* It can use either Postgres or AWSPostgres RDS. According to the database, hibernate.cfg.xml file needs to  be updated.
* Have to create a database name "revature"
* Once run the project Hibernate creates the tables.


Open/Import the project in any IDE Eclipse/IntelliJ

Run the project as java application
In browser open http://localhost:4200
(include all environment setup steps)




**Cucumber Testing using Command Line**

Go to the project folder

Open project1 on Command Line

Run command

```
mvn clean test
```

Check the cucumber report under cucumber-test/target

https://www.baeldung.com/cucumber-rest-api-testing


**Selenium Testing on Command Line**

Go to the project folder

Open project1 on Command Line

Run command

```
selenium-side-runner -w 1 SelemiumTestProject1.side
```

https://www.selenium.dev/selenium-ide/docs/en/introduction/command-line-runner
