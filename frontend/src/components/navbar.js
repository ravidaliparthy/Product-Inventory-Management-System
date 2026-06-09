import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div classname= "container mt-3">
                <Link to ={'/'} className = 'Navbar-brand'>Product Involuntry Management</Link>
            </div>
            <div>
                <Link to= {'/add'} className="btn btn-outline-success btn-sm mx-2">Add Product</Link>
                <Link to ={'/'} className = "btn btn-outline-light btn-sm">View Products</Link>
                </div>
        </nav>
    )
};
export default Navbar;