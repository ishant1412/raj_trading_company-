import { useEffect, useState } from "react";
import { ShoppingCart, MessageCircle } from "lucide-react";
import type { productType } from "../lib/types";
import { apiUrl } from "../lib/api";

export function Shop() {
  const whatsappNumber = "9414751526";
  const [products, setProducts] = useState<productType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl("/api/product"));

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products ?? []);
      } catch (err) {
        setError("Unable to load products right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuy = (productName: string, price: number) => {
    const message = `Hi! I'm interested in buying "${productName}" (Rs. ${price}). Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Shop
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of premium products
          </p>
        </div>

        {isLoading && (
          <div className="text-center text-gray-600 py-12">
            Loading products...
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center text-red-600 py-12">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-2 border-transparent hover:border-blue-400"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="text-3xl font-bold text-blue-600 mb-6">
                    Rs. {product.price}
                  </div>

                  <button
                    onClick={() => handleBuy(product.name, product.price)}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <MessageCircle size={20} />
                    <span>Buy on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && !error && products.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            No products available right now.
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 md:p-12 text-center text-white shadow-xl animate-pulse-slow">
          <ShoppingCart className="mx-auto mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-2">
            Special Bulk Order Discounts Available!
          </h2>
          <p className="text-lg mb-6">
            Contact us via WhatsApp for quantity discounts and special offers.
          </p>
        </div>
      </div>
    </div>
  );
}
