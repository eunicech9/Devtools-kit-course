const database = require("./database")

function get_all_products() {
    database.connection.query(`select * from products`, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  }

function get_product_by_id(id){
    database.connection.query(
        `SELECT * FROM products WHERE id = ${id}`, (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log(result);
            }
        });
}

function create_new_product(name,price){
    database.connection.query(
        `INSERT INTO products(name, market_price) VALUES ('${name}', ${price})`, (error, result) =>{
            if (error) {
                console.log(error);
              } else {
                console.log("Product created.");
              }    
        }
    )
}

function update_price_by_id(id,price){
    database.connection.query(
        `UPDATE products SET market_price = ${price} WHERE id = ${id}`, (error, result)=>{
            if (error) {
                console.log(error);
              } else {
                console.log("Price updated.");
              }    
        }
    )
}

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
    get_all_products, 
    get_product_by_id,
    create_new_product,
    update_price_by_id,
    delete_product
};