import { ShoppingBag, Home, Info, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const whatsappNumber = '9414751526'; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setCurrentPage('home')}>
            <img src={logo} alt="Raj Trading Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold hidden sm:inline">Raj Trading</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'home' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </button>

            <button
              onClick={() => setCurrentPage('shop')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'shop' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'
              }`}
            >
              <ShoppingBag size={20} />
              <span className="hidden sm:inline">Shop</span>
            </button>

            <button
              onClick={() => setCurrentPage('about')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'about' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'
              }`}
            >
              <Info size={20} />
              <span className="hidden sm:inline">About Us</span>
            </button>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
