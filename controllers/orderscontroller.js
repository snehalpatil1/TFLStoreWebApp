var Order = require('../dal/ordersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Order.getAllOrders(function(err, order) {
    if (err)
      res.send(err);
    res.send(order);
  });
};

exports.insert = function(req, res) {
  var new_Order = new Order(req.body);
  console.log(new_Order);

  
   if(!new_Order.oid || !new_Order.amount){
      res.status(400).send({ error:true, message: 'Please provide status' });
    }
   else{
    Order.createOrder(new_Order, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  }
};

exports.getBy = function(req, res) {
    Order.getOrderById(req.params.id, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update = function(req, res) {
    Order.updateById(req.params.id, new Order(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
    Order.remove( req.params.id, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};