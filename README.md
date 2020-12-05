# Node_Assignment#
APIs are created for displaying user's list with pagination, users with selected id's and admins only.

#Setup
Make sure to follow all these steps as explained below to run this application.

--Install the Dependencies from the project folder, install the dependencies:

npm install

--Connect the Sql server on thhe localhost and enter the password in the connection code-block.

--After connecting the server, API's can use and access the "restful_db" database with dummy entries.

--Start the server by entering the following command in the terminal:

nodemon

--To see the user's list with pagination, open up a browser and Go To:

http://localhost:3000/api/users?page=1  // For the user's list on page 1
http://localhost:3000/api/users?page=2  // For the user's list on page 2 and so on..

--To see the users who are having user_id either 1 or 5 or 7, Go To:

http://localhost:3000/api/users/selectedUsers

--To see the user whose admin has at least 3 users, Go To:

http://localhost:3000/api/users/adminUsers

--Press Ctrl+C on Windows or Command + C on Mac in the terminal to stop the localhost server.






 

