import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function EditProduct() {
    const[form,setForm]=useState(
        {productid:"",
        productname:"",
        price:"",
        category:"",
        stock:"",}
    );
    const {id} = useParams();
    const navigate  = useNavigate();
    const API = "http://localhost:5000/product";

    const fetchProduct = async()=>{
        try{
            const res = await axios.get(`${API}/${id}`);
            setForm(res.data);
        }
        catch(e){
            console.error(e);
        }

};

useEffect(()=>{
    fetchProduct();
},[]);

const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.put(`${API}/${id}`,form);
            alert("Product Edited Successfully");
            navigate("/");
        }catch(e){
            console.log(e);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>ProductName</label>
                    <input type="text" name="ProductName" placeholder="ProductName" className="form-control" value={form.ProductName} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" name="Price" placeholder="Price" className="form-control" value={form.Price} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label>Category</label>
                    <input type="text" name="Category" placeholder="Category" className="form-control" value={form.Category} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label>Stock</label>
                    <input type="text" name="Stock" placeholder="Stock" className="form-control" value={form.Stock} onChange={handleChange}  />
                </div>
                <button className="btn btn-success" >Edit Product</button>
            </form>
        </div>
    );

}
export default EditProduct;