var Customer = require('../dal/customersdal');

exports.getAll = function (req, res) {
  console.log("calling controller function");
  Customer.getAllCustomer(function (err, customer) {
    if (err)
      res.send(err);
    res.send(customer);
  });
};

exports.insert = function (req, res) {
  var new_Customer = new Customer(req.body);
  console.log(new_Customer);


  if (!new_Customer.firstname || !new_Customer.lastname) {
    res.status(400).send({ error: true, message: 'Please provide Flower/status' });
  }
  else {
    Customer.createCustomer(new_Customer, function (err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  }
};

exports.getBy = function (req, res) {
  Customer.getCustomerById(req.params.id, function (err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

exports.update = function (req, res) {
  Customer.updateById(req.params.id, new Customer(req.body), function (err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

exports.remove = function (req, res) {
  Customer.remove(req.params.id, function (err, customer) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
  });
};