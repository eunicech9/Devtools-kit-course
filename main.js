const product = require("./product");
const cors = require("cors");   //imports cors module

// product.get_product_by_id(3);
// product.create_new_product('iPod',500);
// product.update_price_by_id(24,543);
// product.delete_product(24);
// product.get_all_products();


//Create a backend service
const express = require("express");

server = express();
server.use(cors());         //tells server to use the cors
server.use(express.json());     //use body parser to parse json for the input

// //define a router to direct the /URI to functions
// router = express.Router();

// //function returns the response 200 OK and message
// router.get("/welcome", (request, response) => {
//   response.status(200).send("Welcome to DevToolkit#2");
// });

server.use(product.router);

//starts the server on the local port number
server.listen(3000, () => {
    console.log("Server is running!");
  });