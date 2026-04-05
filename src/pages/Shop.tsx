import { ShoppingCart, MessageCircle } from 'lucide-react';

export function Shop() {
  const whatsappNumber = '9414751526'; // Replace with actual WhatsApp number

  const products = [
    {
      id: 1,
      name: 'Premium Product A',
      price: '₹500',
      description: 'High quality product with excellent features',
      category: 'Electronics',
      image: '📱',
    },
    {
      id: 2,
      name: 'Deluxe Product B',
      price: '₹1,200',
      description: 'Premium grade material with durability assured',
      category: 'Home',
      image: '🏠',
    },
    {
      id: 3,
      name: 'Standard Product C',
      price: '₹300',
      description: 'Affordable yet reliable solution for daily use',
      category: 'Accessories',
      image: '⌚',
    },
    {
      id: 4,
      name: 'Exclusive Product D',
      price: '₹2,500',
      description: 'Limited edition collection with premium finish',
      category: 'Premium',
      image: '💎',
    },
    {
      id: 5,
      name: 'Smart Product E',
      price: '₹1,800',
      description: 'Advanced technology with user-friendly interface',
      category: 'Electronics',
      image: '🤖',
    },
    {
      id: 6,
      name: 'Essential Product F',
      price: '₹600',
      description: 'Must-have item for everyday convenience',
      category: 'Essentials',
      image: '✨',
    },
  ];

  const handleBuy = (productName: string, price: string) => {
    const message = `Hi! I'm interested in buying "${productName}" (${price}). Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Shop
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of premium products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-2 border-transparent hover:border-blue-400"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                <div className="text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {product.image}
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {product.description}
                </p>

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {product.price}
                </div>

                {/* Buy Button */}
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

        {/* Contact Section */}
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
