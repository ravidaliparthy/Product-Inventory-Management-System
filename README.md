# Product-Inventory-Management-System

# 📦 Product Inventory Management System

A modern full-stack Product Inventory Management System developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with React Router, Axios, Bootstrap, and Mongoose.

The application enables users to efficiently manage product inventories through a clean and responsive interface while providing complete CRUD (Create, Read, Update, Delete) functionality.

---

## 🚀 Project Overview

Managing product inventories manually can become difficult as the number of products grows. This system provides a centralized platform where users can:

- Add new products
- View all products
- Search products by Product ID
- Update existing products
- Delete products
- Manage inventory records in MongoDB

The application follows a client-server architecture where React handles the frontend, Express and Node.js manage the backend services, and MongoDB stores product information.

---

## ✨ Key Features

### 📋 Product Management
- Add new products to inventory
- View complete product catalog
- Edit existing product details
- Delete products from inventory

### 🔍 Product Search
- Search products using Product ID
- Instant retrieval from MongoDB

### 💾 Database Integration
- MongoDB database storage
- Mongoose schema validation
- Persistent data management

### 🎨 User Interface
- Responsive design using Bootstrap
- Clean navigation using React Router
- User-friendly forms and tables

### 🔄 CRUD Operations
- Create Product
- Read Products
- Update Product
- Delete Product

---

# 🛠 Technology Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React.js | User Interface Development |
| React Router DOM | Page Navigation |
| Axios | API Communication |
| Bootstrap 5 | Responsive UI Design |
| JavaScript ES6+ | Application Logic |

---

## Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | REST API Development |
| CORS | Cross-Origin Requests |
| Mongoose | MongoDB Object Modeling |

---

## Database

| Technology | Purpose |
|------------|----------|
| MongoDB | NoSQL Database |

---

# 🏗 System Architecture

```text
┌───────────────────┐
│   React Frontend  │
└─────────┬─────────┘
          │ Axios Requests
          ▼
┌───────────────────┐
│ Express REST API  │
└─────────┬─────────┘
          │ Mongoose
          ▼
┌───────────────────┐
│     MongoDB       │
└───────────────────┘
```

---

# 📁 Project Structure

```text
Product-Inventory-Management
│
├── backend
│   │
│   ├── server.js
│   ├── products.js
│   ├── package.json
│   └── node_modules
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── AddProduct.js
│   │   │   ├── EditProduct.js
│   │   │   ├── ListProduct.js
│   │   │   └── Navbar.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │
│   └── package.json
│
└── README.md
```

---

# 📊 Database Schema

## Product Schema

```javascript
{
  productid: Number,
  productname: String,
  price: String,
  category: String,
  stock: String
}
```

### Field Description

| Field | Type | Description |
|---------|---------|-------------|
| productid | Number | Unique Product Identifier |
| productname | String | Product Name |
| price | String | Product Price |
| category | String | Product Category |
| stock | String | Available Stock |

---

# 🔗 API Endpoints

## Create Product

```http
POST /product
```

### Request Body

```json
{
  "productid": 101,
  "productname": "Laptop",
  "price": "50000",
  "category": "Electronics",
  "stock": "20"
}
```

---

## Get All Products

```http
GET /product
```

---

## Get Product By ID

```http
GET /product/:id
```

Example:

```http
GET /product/101
```

---

## Update Product

```http
PUT /product/:id
```

Example:

```http
PUT /product/101
```

---

## Delete Product

```http
DELETE /product/:id
```

Example:

```http
DELETE /product/101
```

---

# 🖥 User Interface Modules

## 1️⃣ Navigation Bar

Provides navigation between:

- Add Product
- View Products

Built using:

- React Router DOM
- Bootstrap Navbar Components

---

## 2️⃣ Add Product Module

Allows users to:

- Enter Product ID
- Product Name
- Price
- Category
- Stock

Features:

- Controlled React Forms
- Validation using Required Fields
- Axios POST Requests

---

## 3️⃣ Product Listing Module

Displays:

- Product ID
- Product Name
- Price
- Category
- Stock

Features:

- Dynamic Table Rendering
- Data fetched from MongoDB
- Bootstrap Table Styling

---

## 4️⃣ Search Module

Allows users to search products using Product ID.

Features:

- Fast retrieval
- API-based searching
- Error handling for unavailable products

---

## 5️⃣ Edit Product Module

Allows modification of:

- Product Name
- Price
- Category
- Stock

Features:

- Prefilled data
- Axios PUT Requests
- Real-time updates

---

## 6️⃣ Delete Product Module

Allows users to permanently remove products.

Features:

- Confirmation Prompt
- Axios DELETE Request
- Automatic Refresh


# 🔄 Application Workflow

```text
User
 ↓
Add Product
 ↓
React Form
 ↓
Axios Request
 ↓
Express API
 ↓
MongoDB
 ↓
Data Stored
 ↓
View Products
 ↓
Edit / Delete / Search
```

---

# 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

- MERN Stack Development
- React Hooks
- React Router DOM
- Axios API Integration
- MongoDB CRUD Operations
- Mongoose ODM
- REST API Development
- Bootstrap UI Design
- State Management
- Client-Server Architecture

---

# 🚀 Future Enhancements

### Security
- JWT Authentication
- Role-Based Access Control

### Inventory Features
- Low Stock Alerts
- Product Categories Dashboard
- Barcode Integration
- Product Image Upload

### Reporting
- CSV Export
- Excel Export
- Inventory Analytics

### Deployment
- MongoDB Atlas
- Render / Railway Backend
- Vercel Frontend

---

# 👨‍💻 Author

## Ravi Daliparthy

**B.Tech – Information & Communication Technology**

**SASTRA Deemed University**

### Skills Demonstrated

- React.js
- Node.js
- Express.js
- MongoDB
- REST APIs
- Bootstrap
- JavaScript
- Full-Stack Development

---
# ⚙ Configuration

Before running the application, update the MongoDB connection string with your own database credentials.

```javascript
mongoose.connect("mongodb://localhost:27017/mydatabase")
```

If using MongoDB Atlas:

```javascript
mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster.mongodb.net/<database-name>"
)
```

> **Note:** Replace all placeholder values (`<username>`, `<password>`, and `<database-name>`) with your own credentials. For security reasons, never expose sensitive information in public repositories. Use environment variables to manage secrets.

---

# ⭐ Support

If you found this project useful:

⭐ Star the Repository

🍴 Fork the Repository

📝 Contribute Improvements

---

# 📄 License

This project is developed for educational, academic, and learning purposes.

© 2026 Ravi Daliparthy
