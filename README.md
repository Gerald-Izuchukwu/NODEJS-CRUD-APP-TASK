# NODEJS-CRUD-APP-TASK

<!-- The Task Requirements and how to Acess Them -->

# 1. Display the payload containig the message and the data 
This can be done by sending a GET request with "/" just after the port
e.g. http://localhost:8002/

# 2. Create a new data
This can be done by sending a POST request with "/new" just after the port
e.g. http://localhost:8002/
For this to work, the following must be fulfilled
  header{
    key : "Content-Type",
    value : "application/json"
  }, the body must be set to raw


# 3. Gets The Data created
This can be done by sending a GET request with "/data" just after the port
e.g. http://localhost:8002/data

# 4 Get Data by ID
This can be done by sending a GET request with "/get/:id" just after the port
the id is the id of the particular data that is to be fetched
e.g. http://localhost:8002/get/ad4782ghehgdh

# 5 Modify Data by ID
This can be done by sending a PATCH request with "/patch/:id" just after the port
the id is the id of the particular data that is to be modified
e.g. http://localhost:8002/patch/ad4782ghehgdh
For this to work, the following must be fulfilled
  header{
    key : "Content-Type",
    value : "application/json"
  }, the body must be set to raw


# 6 Delete data by ID
This can be done by sending a DELETE request with "/delete/:id" just after the port
the id is the id of the particular data that is to be deleted
e.g. http://localhost:8002/delete/ad4782ghehgdh

