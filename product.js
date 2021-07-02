const database = require("./database")


const express = require("express");
const { response, request } = require("express");

router = express.Router();

router.get("/products/all",(request,response) =>{
  database.connection.query(`select * from products`, (error, result) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error occured at the Backend");
    } else {
      response.status(200).send(result);
    }
  });
})


// function get_all_products() {
//     database.connection.query(`select * from products`, (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result);
//       }
//     });
//   }

router.get("/products/by-id", (request,response) => {
  database.connection.query(
    `SELECT * FROM products WHERE id = ${request.query.id}`, (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occured at the Backend")
        } else {
          response.status(200).send(result);
        }
    });
})

// function get_product_by_id(id){
//     database.connection.query(
//         `SELECT * FROM products WHERE id = ${id}`, (error, result) => {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log(result);
//             }
//         });
// }

router.post("/products/add", (request,response) => {
  database.connection.query(
    `INSERT INTO products(name, market_price) VALUES ('${request.body.name}', ${request.body.price})`, (error, result) =>{
        if (error) {
            console.log(error);
            response.status(500).send("Some error occurred at the Backend");
          } else {
            response.status(200).send("New product created successfully!");
          }    
    }
)
})

// function create_new_product(name,price){
//     database.connection.query(
//         `INSERT INTO products(name, market_price) VALUES ('${name}', ${price})`, (error, result) =>{
//             if (error) {
//                 console.log(error);
//               } else {
//                 console.log("Product created.");
//               }    
//         }
//     )
// }

router.put("/products/update/by-id", (request, response) => {
  database.connection.query(
    `UPDATE products SET name = '${request.body.new_name}', market_price = ${request.body.new_price} WHERE id = ${request.body.id}`, (error, result)=>{
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured at the Backend")
          } else {
            response.status(200).send("Price updated.");
          }    
    }
)
})

// function update_price_by_id(id,price){
//     database.connection.query(
//         `UPDATE products SET market_price = ${price} WHERE id = ${id}`, (error, result)=>{
//             if (error) {
//                 console.log(error);
//               } else {
//                 console.log("Price updated.");
//               }    
//         }
//     )
// }

router.delete("/products/delete/by-id", (request,response) => {
  database.connection.query(
    `DELETE FROM products WHERE id = ${request.query.id}`, (error, result)=>{
        if (error) {
            console.log(error);
            response.status(500).send("Some error occurred at the backend.")
          } else {
            response.status(200).send("Product deleted.");
          }    
    }
)
})

function delete_product (id){
    database.connection.query(
        `DELETE FROM products WHERE id = ${id}`, (error, result)=>{
            if (error) {
                console.log(error);
              } else {
                console.log("Product deleted.");
              }    
        }
    )
}

module.exports = {
    // get_all_products, 
    // get_product_by_id,
    // create_new_product,
    // update_price_by_id,
    // delete_product,
    router,
};