
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="w-full py-4 px-6 md:px-8 border-b border-gray-100 bg-white/80 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/landing" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white"
            >
              <Shield size={22} />
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.9 }}
              className="text-lg font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
            >
              Safeguard Nusantara
            </motion.div>
          </Link>
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 font-medium text-sm">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
                  >
                    Periksa
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/edukasi" 
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
                  >
                    Edukasi
                  </Link>
                </li>
              </ul>
            </nav>
            <a 
              href="https://mikascend.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-md"
              >
                <img 
                  src="/lovable-uploads/bbfe987f-5d44-4300-8f59-ed3024d4ece1.png" 
                  alt="Owl Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </a>
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-6 md:px-8"
        >
          {children}
        </motion.div>
      </main>
      
      <footer className="py-6 border-t border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Safeguard Nusantara. Semua hak dilindungi.</p>
          <p className="mt-1">Melindungi masyarakat Indonesia dari penipuan online.</p>
          <div className="flex items-center justify-center mt-3 space-x-4">
            <a 
              href="https://twitter.com/mikascend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors flex items-center"
            >
              <Twitter size={16} className="mr-1" />
              <span>@mikascend</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
