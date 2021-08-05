//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');


var Credentials = function(Credentials){

    //this.crid=Credentials.crid;
    this.uname = Credentials.uname;
    this.password = Credentials.password;
  };

Credentials.createCredentials = function (newCredentials, result) {  
        console.log("New Credential to be added ");
        console.log(newCredentials);
        sql.query("INSERT INTO credentials set ?", newCredentials, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Credentials.getCredentialsById = function (CredentialId, result) {
        sql.query("Select * from credentials where crid = ? ", CredentialId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Credentials.getAllCredentials = function (result) {
      console.log("Invoking dal getall OrdersDetails");
      
        sql.query("Select * from credentials", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Credentials : ', res);  
                  result(null, res);
                }
            });   
};

Credentials.updateById = function(id, Credential, result){

  sql.query("UPDATE credentials SET password = ? WHERE crid = ?", [Credential.password, id], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};


Credentials.remove = function(id, result){
    sql.query("DELETE FROM credentials WHERE crid = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=Credentials;