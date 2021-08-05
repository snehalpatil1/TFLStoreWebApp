var OrderDetail = require('../dal/orderdetailsdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  OrderDetail.getAllOrdersDetails(function(err, orderdetail) {
    if (err)
      res.send(err);
    res.send(orderdetail);
  });
};

exports.insert = function(req, res) {
  var new_OrderDetail = new OrderDetail(req.body);
  console.log(new_OrderDetail);

  
   if(!new_OrderDetail.odid || !new_OrderDetail.oid){
      res.status(400).send({ error:true, message: 'Please provide status' });
    }
   else{
    OrderDetail.createOrderDetails(new_OrderDetail, function(err, orderdetail) {
      if (err)
      res.send(err);
    res.json(orderdetail);
    });
  }
};

exports.getBy = function(req, res) {
    OrderDetail.getOrderDetailById(req.params.id, function(err, orderdetail) {
    if (err)
      res.send(err);
    res.json(orderdetail);
  });
};

exports.update = function(req, res) {
    OrderDetail.updateById(req.params.id, new OrderDetail(req.body), function(err, orderdetail) {
    if (err)
      res.send(err);
    res.json(orderdetail);
  });
};

exports.remove = function(req, res) {
    OrderDetail.remove( req.params.id, function(err, orderdetail) {
    if (err)
      res.send(err);
    res.json({ message: 'OrderDetail successfully deleted' });
  });
};