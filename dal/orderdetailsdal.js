//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');


var OrderDetails = function(OrderDetails){

    this.odid=OrderDetails.odid;
    this.oid = OrderDetails.oid;
    this.fid = OrderDetails.fid;
    this.quantity = OrderDetails.quantity;
   
};

OrderDetails.createOrderDetails = function (newOrderDetails, result) {  
        console.log("New order to be added ");
        console.log(newOrderDetails);
        sql.query("INSERT INTO orderdetails set ?", newOrderDetails, function (err, res) {
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

OrderDetails.getOrderDetailById = function (OrderDetailId, result) {
        sql.query("Select * from orderdetails where odid = ? ", OrderDetailId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


OrderDetails.getAllOrdersDetails = function (result) {
      console.log("Invoking dal getall OrdersDetails");
      
        sql.query("Select * from orderdetails", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('OrderDetails : ', res);  
                  result(null, res);
                }
            });   
};

OrderDetails.updateById = function(id, OrderDetail, result){

  sql.query("UPDATE orderdetails SET quantity = ? WHERE odid = ?", [OrderDetail.quantity, id], 
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


OrderDetails.remove = function(id, result){
    sql.query("DELETE FROM orderdetails WHERE odid = ?", [id],
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

module.exports=OrderDetails;