import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import heroImg from '../assets/hero.png';
import shop from "../assets/shop.png"
import inside from "../assets/inside.jpeg"

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: shop,
      title: 'Welcome to Raj Trading',
      subtitle: 'Quality Products at Best Prices',
     
    },
    {
      image: inside,
      title: 'Premium Quality',
      subtitle: 'Best products for your needs',
     
    },
    {
      image: heroImg,
      title: 'Fast Delivery',
      subtitle: 'Quick and reliable service',
      color: 'from-blue-500 to-blue-400',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden rounded-lg m-4 md:m-8">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-r ${slide.color} flex  items-center pt-20 justify-start relative`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                />
                <div className=" text-start pl-20 text-black px-4 animate-fadeIn">
                  <h1 className="text-10xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-2xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 shadow-lg"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 shadow-lg"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-3 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Quality Products',
              description: 'We offer only the finest quality products sourced with care.',
            },
            {
              icon: '⚡',
              title: 'Fast Service',
              description: 'Quick response and efficient order processing guaranteed.',
            },
            {
              icon: '💰',
              title: 'Best Prices',
              description: 'Competitive pricing without compromising on quality.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-400"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 md:p-12 text-center text-white shadow-xl animate-pulse-slow">
          <Sparkles className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore our products?
          </h2>
          <p className="text-lg mb-6">
            Browse our shop to find amazing deals on quality items.
          </p>
          <a
          target="_blank"
              rel="noopener noreferrer"
           href='https://maps.app.goo.gl/ufWK83pZjA4K7iVq9'
            className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Visit Shop
          </a>
        </div>
      </section>
    </div>
  );
}
