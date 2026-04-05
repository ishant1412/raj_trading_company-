
import { Plus, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { productType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../lib/api";

const Admin = () => {
  const navigate= useNavigate()
  const [products, setProducts] = useState<productType[]>([
    {
     
      name: "Rice Premium",
      price: 450,
      image: "https://images.unsplash.com/photo-1595040851097-8b7dc18c5e00?w=400&h=300&fit=crop",
    },
   
  ]);

  async function fetchproducts(){
try{
 const response =await fetch(apiUrl("/api/product"));
 const data = await response.json();
 console.log(data.products)
 setProducts(data.products)
}
catch(e){
console.log("error while fetchign products")
}

  }
 
async function checkIsadmin(){
 const token = window.localStorage.getItem("Authorization")
 if(!token){
  navigate("/auth")
 }

}  
  useEffect( ()=>{
    checkIsadmin().then(()=>{
fetchproducts()
    })


  },[])
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    price: string;
    image: string | null;
    imageFile?: File;
  }>({
    name: "",
    price: "",
    image: null,
  });

  const handleAddProduct = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ name: "", price: "", image: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Store file object for later upload
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
    }));

    // Also create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      setFormData((prev) => ({
        ...prev,
        image: base64String,
      }));
    };
    reader.onerror = () => {
      alert("Error reading file");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.price || !formData.imageFile) {
      alert("Please fill all fields and upload an image");
      return;
    }

    try {
      // Step 1: Upload image to backend
      const imageFormData = new FormData();
      imageFormData.append("image", formData.imageFile);

      const imageUploadResponse = await fetch(apiUrl("/api/uploadimage"), {
        method: "POST",
        body: imageFormData,
      });

      if (!imageUploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const imageData = await imageUploadResponse.json();
      console.log(imageData)
      const imageUrl =  imageData.image; // Adjust based on your backend response
       console.log(imageUrl)
      // Step 2: Create product with image URL
      const newProduct: productType = { 
        name: formData.name.trim(),
        price: parseInt(formData.price),
        image: imageUrl,
      };

      const productResponse = await fetch(apiUrl("/api/product"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: newProduct })     
      });

      if (!productResponse.ok) {
        throw new Error(`HTTP error! status: ${productResponse.status}`);
      }

      const data = await productResponse.json();
      console.log("Product added successfully:", data);
      setProducts((prev) => [newProduct, ...prev]);
      handleCloseForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const handleDeleteProduct = async (name:string) => {
   try{
    await fetch(apiUrl("/api/product"),{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name
      })
    
    })
   }
   catch(e){
    console.log("error while deleting the entry with name:",name)
   }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
            <button
              onClick={handleAddProduct}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            >
              <Plus size={20} />
              Add Product
            </button>
          </div>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product,index) => (
            <div
             key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteProduct(product.name)}
                  className="absolute top-3 right-3 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-md"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Card Footer */}
              <div className="p-4">
                <h3 className="text-slate-800 font-semibold text-lg truncate">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold text-lg mt-2">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No products found</p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showForm && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-in fade-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add New Product</h2>
              <button
                onClick={handleCloseForm}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Name */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                />
              </div>

              {/* Image Preview */}
              {formData.image && (
                <div className="mt-4">
                  <p className="text-slate-700 font-medium mb-2">Preview:</p>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
