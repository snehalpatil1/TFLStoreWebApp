// API routes for Controller callback functions
//a Separate responsibility  for navigation
var flowerController=require("./controllers/flowerscontroller");
var customerController=require("./controllers/customerscontroller");
var orderController=require("./controllers/orderscontroller");
var orderDetailController=require("./controllers/orderdetailscontroller");
var credentialsController=require("./controllers/credentialscontroller");

//get the app object of express from server.js

module.exports=function(app){
    //Tasks  HTTP request Mapping
    //http://localhost:9898/api/tasks
    app.route("/api/credentials")
    .get(credentialsController.getAll)             
    .post(credentialsController.insert);           

    app.route("/api/credentials/:id")
      .get(credentialsController.getBy)            
      .put(credentialsController.update)           
      .delete(credentialsController.remove);
   
    //Flowers HTTP request Mapping    
    app.route("/api/flowers")              
    .get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)           //http://localhost:9898/api/flowers/:id    GET
    .put(flowerController.update)          //http://localhost:9898/api/flowers/:id    PUT
    .delete(flowerController.remove);      //http://localhost:9898/api/flowers/:id    DELETE    

    app.route("/api/customers")
    .get(customerController.getAll)             
    .post(customerController.insert);           

    app.route("/api/customers/:id")
      .get(customerController.getBy)            
      .put(customerController.update)           
      .delete(customerController.remove);
      
      app.route("/api/orders")
    .get(orderController.getAll)             
    .post(orderController.insert);           

    app.route("/api/orders/:id")
      .get(orderController.getBy)            
      .put(orderController.update)           
      .delete(orderController.remove);       

      app.route("/api/orderdetails")
    .get(orderDetailController.getAll)             
    .post(orderDetailController.insert);           

    app.route("/api/orderdetails/:id")
      .get(orderDetailController.getBy)            
      .put(orderDetailController.update)           
      .delete(orderDetailController.remove);       





    //Orders HTTP request Mapping 
    //OrderItems HTTP request Mapping 
    //ShopingCart HTTP request Mapping 
    //Payments HTTP request Mapping 
};


  
