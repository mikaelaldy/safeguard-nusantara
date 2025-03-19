
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const Landing: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="py-10 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block p-3 rounded-2xl bg-blue-100 mb-6">
              <Shield size={40} className="text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Safeguard Nusantara
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Melindungi masyarakat Indonesia dari penipuan online dengan kecerdasan buatan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  Periksa Pesan Sekarang
                </motion.button>
              </Link>
              <Link to="/edukasi">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg shadow border border-blue-100 hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Kenapa Menggunakan Safeguard Nusantara?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Deteksi Cepat</h3>
              <p className="text-gray-600">
                Analisis cepat terhadap pesan mencurigakan dengan teknologi AI canggih.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Peringatan Dini</h3>
              <p className="text-gray-600">
                Dapatkan peringatan tentang potensi penipuan sebelum terlambat.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Edukasi Pengguna</h3>
              <p className="text-gray-600">
                Pelajari cara mengenali dan menghindari penipuan umum di Indonesia.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 md:py-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Lindungi Diri Anda Hari Ini</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Jangan menjadi korban penipuan online. Mulai periksa pesan mencurigakan sekarang.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg hover:bg-blue-50 transition-colors"
              >
                Mulai Sekarang
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
