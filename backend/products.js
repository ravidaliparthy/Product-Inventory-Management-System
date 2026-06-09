const mongoose = require("mongoose");
const productschema = new mongoose.Schema(
    {
        productid: {type:Number,requierd:true,unique:true},
        productname : {type:String,requierd:true},
        price:{type:String,requierd:true},
        category:{type:String,requierd:true},
        stock:{type:String,requierd:true},

    }
);

module.export = mongoose.model("product",productschema);
