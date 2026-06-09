import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function ListProduct()
{
    const[product,setProduct] = useState([]);
    const [ filteredProduct,setFilteredProduct] = useState([]);
    const [searchID,setSearchID] =useState("");
    const API = "http://localhost:5000/product";

    const fetchProduct = async() =>
    {
        try{
            const res = await axios.get(API);
            setProduct(res.data);
            setFilteredProduct(res.data);
        }
        catch(e)
        {
            console.log(e);
        }
    };

    useEffect(()=>
    {
        fetchProduct();
    },[]);

    const handleDelete = async(id) =>
    {
        if(window.confirm("Are you sure you want to delete this product?"))
        {
            await axios.delete(`${API}/${id}`);
            alert("Product deleted successfully");
            fetchProduct();
        }
    };

    const handleSearch=async()=>{
        if(searchID.trim()===" "){
            setFilteredProduct(product);
            return;
        }

        try{
            const res=await axios.get(`${API}/${searchID}`);
            setFilteredProduct([res.data]);
            alert("Found Product with SearchID..");
        }catch(e){
            alert("No Product Found with SearchID..");
            setFilteredProduct([]);
        }
    };
 return (
        <div>
            <h2>All Products</h2>
            <div className='d-flex mb-3'>
                <input type='text' placeholder='Enter SearchID to Search' className='form-control me-2' value={searchID} onChange={(e)=>setSearchID(e.target.value)}/>
                <button className='btn btn-primary btn-sm mx-2' onClick={handleSearch}>Search</button>
                <button className='btn btn-secondary btn-sm' onClick={fetchProduct}>Reset</button>
            </div>
            <table className='table table-striped mt-3'>
                <thead className='table-dark'>
                    <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProduct.length>0 ? (
                        filteredProduct.map((b)=>(
                            <tr key={b.ProductID}>
                                <td>{b.ProductID}</td>
                                <td>{b.ProductName}</td>
                                <td>{b.Price}</td>
                                <td>{b.Category}</td>
                                <td>{b.Stock}</td>
                                <td>
                                    <Link to={`edit/${b.ProductID}`} className='btn btn-primary btn-sm mx-2'>Edit</Link>
                                    <button className='btn btn-danger btn-sm' onClick={()=>handleDelete(b.ProductID)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={"7"} className='text-center text-danger'>No Products</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListProduct;


