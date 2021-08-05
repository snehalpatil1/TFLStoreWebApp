//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');


var Order = function (Order) {

  this.oid = Order.oid;
  this.odate = Order.odate;
  this.cid = Order.cid;
  this.amount = Order.amount;

};

Order.createOrder = function (newOrder, result) {
  console.log("New order to be added ");
  console.log(newOrder);
  sql.query("INSERT INTO orders set ?", newOrder, function (err, res) {
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

Order.getOrderById = function (OrderId, result) {
  sql.query("Select * from orders where oid = ? ", OrderId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};


Order.getAllOrders = function (result) {
  console.log("Invoking dal getall Orders");

  sql.query("Select * from orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Orders : ', res);
      result(null, res);
    }
  });
};

Order.updateById = function (id, Order, result) {

  sql.query("UPDATE orders SET amount = ? WHERE oid = ?", [Order.amount, id],
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


Order.remove = function (id, result) {
  sql.query("DELETE FROM orders WHERE oid = ?", [id],
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

module.exports = Order;