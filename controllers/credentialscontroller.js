var Credential = require('../dal/credentialsdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Credential.getAllCredentials(function(err, credentials) {
    if (err)
      res.send(err);
    res.send(credentials);
  });
};

exports.insert = function(req, res) {
  var new_Credentials = new Credential(req.body);
  console.log(new_Credentials);

  
   if(!new_Credentials.password || !new_Credentials.uname){
      res.status(400).send({ error:true, message: 'Please provide status' });
    }
   else{
    Credential.createCredentials(new_Credentials, function(err, credentials) {
      if (err)
      res.send(err);
    res.json(credentials);
    });
  }
};

exports.getBy = function(req, res) {
    Credential.getCredentialsById(req.params.id, function(err, credentials) {
    if (err)
      res.send(err);
    res.json(credentials);
  });
};

exports.update = function(req, res) {
    Credential.updateById(req.params.id, new Credential(req.body), function(err, credentials) {
    if (err)
      res.send(err);
    res.json(credentials);
  });
};

exports.remove = function(req, res) {
    Credential.remove( req.params.id, function(err, credentials) {
    if (err)
      res.send(err);
    res.json({ message: 'Credentials successfully deleted' });
  });
};