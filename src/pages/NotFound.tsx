
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-morphism rounded-2xl p-8 md:p-12 max-w-md w-full text-center"
      >
        <div className="mb-6 inline-flex p-3 bg-red-100 rounded-full">
          <AlertTriangle className="text-red-500" size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin telah dipindahkan atau dihapus.
        </p>
        
        <Button asChild className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium">
          <Link to="/">
            <Home size={18} className="mr-2" />
            Kembali ke Beranda
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
