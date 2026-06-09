import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Addproduct()
{
    const[form,setForm]=useState(
        {productid:"",
        productname:"",
        price:"",
        category:"",
        stock:"",}
    );
    const navigate = useNavigate();
    const API = "http://localhost:5000/product";

    const handleChange=(e) =>
    {
        setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit = async(e) =>
    {
        e.preventDefault();
        try{
            await axios.post(API,form);
            alert("Product added Successfully");
            navigate("/");
        }
        catch(e)
        {
            alert("error in adding product");
        }
    };

    return(
         <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label>Product ID</label>
    <input
      type="text"
      name="productid"
      placeholder="Product ID"
      className="form-control"
      value={form.productid}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label>Product Name</label>
    <input
      type="text"
      name="productname"
      placeholder="Product Name"
      className="form-control"
      value={form.productname}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label>Price</label>
    <input
      type="number"
      name="price"
      placeholder="Price"
      className="form-control"
      value={form.price}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label>Category</label>
    <input
      type="text"
      name="category"
      placeholder="Category"
      className="form-control"
      value={form.category}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label>Stock</label>
    <input
      type="text"
      name="stock"
      placeholder="Stock"
      className="form-control"
      value={form.stock}
      onChange={handleChange}
      required
    />
  </div>

  <button className="btn btn-success">Add Product</button>
</form>
        </div>
    );
};

export default Addproduct;