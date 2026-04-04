import { Award, Users, Heart, Zap, MessageCircle } from 'lucide-react';

export function About() {
  const whatsappNumber = '917620844884'; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            About Raj Trading Company
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for quality products and exceptional service
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16 animate-slideInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-6xl flex justify-center">🎯</div>
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Raj Trading Company, our mission is to provide customers with the highest quality products at the most competitive prices. We believe in building long-term relationships with our customers by delivering exceptional service and value.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16 animate-slideInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision becoming the leading trading company in the region, known for our reliability, quality, and customer-centric approach. Our goal is to expand our product range and reach more customers while maintaining our commitment to excellence.
              </p>
            </div>
            <div className="text-6xl flex justify-center">✨</div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Quality',
                description: 'We never compromise on the quality of our products',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'Honest dealings and transparency in all transactions',
              },
              {
                icon: Zap,
                title: 'Efficiency',
                description: 'Fast service without compromising quality',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-400 text-center animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-600 transition-all duration-300">
                      <Icon
                        size={32}
                        className="text-blue-600 group-hover:text-white transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
            Why Choose Raj Trading?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              '✅ Verified and authentic products',
              '✅ Competitive pricing with discounts',
              '✅ Fast and reliable delivery',
              '✅ Excellent customer support via WhatsApp',
              '✅ Wide range of categories',
              '✅ 24/7 availability for inquiries',
              '✅ Bulk order discounts',
              '✅ Easy and secure transactions',
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 animate-slideInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl flex-shrink-0">💚</span>
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 md:p-12 text-white text-center shadow-xl animate-pulse-slow">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our dedicated team is committed to providing you with the best service and support. With years of experience in the trading industry, we understand your needs and strive to exceed your expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { name: 'Raj Kumar', role: 'Founder & CEO', emoji: '👔' },
              { name: 'tilak Raj', role: 'Operations Manager', emoji: '👩‍💼' },
             
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md p-6 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <img src="" alt="" />
                <div className="text-5xl mb-3">{member.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-100">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Get in Touch With Us Today
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have any questions? We're here to help!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <MessageCircle size={24} />
            Contact Us on WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
