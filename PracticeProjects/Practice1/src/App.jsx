import React from "react";
import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     //  async function fetchProducts
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         let url = "https://dummyjson.com/products";

//         //if user searching something
//         //fetch matching products

//         if (search.trim() !== "") {
//           url = `https://dummyjson.com/products/search?q=${search}`;
//         }

//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         const data = await response.json();

//         setProducts(data.products);
//       } catch (err) {
//         setError(err.messages);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   } ,[search]);

//   return (
//     <div className="container">
//       <h1>Product Store</h1>

//       <input
//         type="text"
//         placeholder="Search Products..."
//         onChange={(e) => setSearch(e.target.value)}
//         value={search}
//       />

//       {loading && <p>Loading Products...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="products">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.thumbnail} alt={product.title} />

//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <strong>$ {product.price}</strong>
//           </div>
//         ))};
//       </div>

//       {!loading && products.length === 0 && (<p>No products found.</p>)}
//     </div>
//   );
// };

const App = () => {
  // const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="">Email</label>
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="">Password</label>
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
