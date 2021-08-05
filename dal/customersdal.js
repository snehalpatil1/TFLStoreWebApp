//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Customer = function (Customer) {

  //Constructor

  this.cid = Customer.cid
  this.firstname = Customer.firstname;
  this.lastname = Customer.lastname;
  this.email = Customer.email;
  this.contactno = Customer.contactno;

};

//Attach member function to Model to perform DatABASE  CRUD operations

Customer.createCustomer = function (newCustomer, result) {
  console.log("New flower to be added ");
  console.log(newCustomer);

  sql.query("INSERT INTO customers set ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.getCustomerById = function (CustomerId, result) {
  sql.query("Select * from customers where cid = ? ", CustomerId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};


Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall customers");

  sql.query("Select * from customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Customers : ', res);
      result(null, res);
    }
  });
};

Customer.updateById = function (id, Customer, result) {

  sql.query("UPDATE customers SET contactno = ? WHERE cid = ?", [Customer.contactno, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        result(null, res);
      }
    });
};


Customer.remove = function (id, result) {
  sql.query("DELETE FROM customers WHERE cid = ?", [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        result(null, res);
      }
    });
};

module.exports = Customer;