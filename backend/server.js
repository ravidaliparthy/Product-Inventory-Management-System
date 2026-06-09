const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const product = require("./products.js");
const { error } = require("console");
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log("mongoDB connected successfully"))
.catch((e)=>console.error(e));

app.post("/product", async (req, res) => {
  try {
    const p = new product({
      productid: req.body.productid,
      productname: req.body.productname,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
    });
    await p.save();
    res.status(200).json("Product added successfully");
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

    app.get("/product",async(req,res) =>{
        try{
            const products = await product.find();
            if (products.length > 0)
            {
            res.status(200).json(products);}
            else{
                res.status(404).json("no products found");
            }
        }
        catch(e)
        {
            res.status(400).json({error:e.message});
        }
    });

    app.get("/product/:id",async(req,res)=>
    {
        try{
            const pro= await product.findOne({productid:req.params.id});
            if(pro)
            {
                res.status(200).json(pro);
            }
            else{
                res.status(404).json("product not found");
            }
        }
        catch(e)
        {
            res.status(400).json({error:e.message});
        }
    });

    app.delete("/product/:id",async(req,res)=>
    {
        try {
            const did = await product.findOneAndDelete({productid:req.params.id});
            if (did)
            {
                res.status(200).json("product deleted successfully");
            }
            else{
                res.status(404).json("product not found");
            }
        } 
        catch(e){
            res.status(400).json({error:e.message});
        }
    });

    app.put("/product/:id",async(req,res)=>
    {
        try{
            const pid = await product.findOneAndUpdate({productid:req.params.id},
                req.body,
                {new:true}
            );
            if (pid)
            {
                res.status(200).json("product updated successfully");
            }
            else{
                res.status(404).json("product not found");
        }

    }
    catch(e){
        res.status(400).json({error:e.message});
    }
});

app.listen(port,()=>
{
    console.log(`server is running on port ${port}`);
});