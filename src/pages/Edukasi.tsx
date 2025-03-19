
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  MessageSquare, 
  Link, 
  Mail, 
  Phone, 
  ShoppingBag, 
  CreditCard, 
  AlertCircle 
} from 'lucide-react';

interface ScamType {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

const scamTypes: ScamType[] = [
  {
    icon: <MessageSquare className="text-blue-500" />,
    title: "Penipuan Pesan",
    description: "Pesan yang mengklaim berasal dari sumber terpercaya dan meminta Anda untuk membagikan informasi pribadi atau merespons dengan cepat.",
    examples: [
      "Pesan dari 'bank' yang meminta verifikasi PIN ATM",
      "SMS yang mengklaim Anda memenangkan hadiah besar",
      "Pesan WhatsApp dari nomor asing yang mengaku kerabat"
    ]
  },
  {
    icon: <Link className="text-purple-500" />,
    title: "Penipuan Tautan",
    description: "Tautan mencurigakan yang mengarah ke situs web palsu untuk mencuri informasi atau menginstal malware.",
    examples: [
      "Tautan pendek yang menyamarkan tujuan sebenarnya",
      "Situs web palsu yang tampak seperti situs resmi",
      "Tautan 'login' palsu pada email yang tampak resmi"
    ]
  },
  {
    icon: <Mail className="text-red-500" />,
    title: "Penipuan Email",
    description: "Email yang mengklaim dari sumber terpercaya seperti bank, layanan pemerintah, atau perusahaan besar.",
    examples: [
      "Email phishing dari 'bank' meminta pembaruan akun",
      "Email dengan lampiran berbahaya",
      "Email yang mengklaim dari pemerintah tentang pajak"
    ]
  },
  {
    icon: <Phone className="text-green-500" />,
    title: "Penipuan Telepon",
    description: "Panggilan telepon di mana penipu mengaku sebagai pihak resmi dan mencoba menipu Anda.",
    examples: [
      "Panggilan dari 'dukungan teknis' palsu",
      "Telepon dari 'bank' tentang masalah akun",
      "Panggilan tentang 'kerabat yang mengalami kecelakaan'"
    ]
  },
  {
    icon: <ShoppingBag className="text-orange-500" />,
    title: "Penipuan Belanja Online",
    description: "Situs web atau toko online palsu yang mengambil uang Anda tanpa mengirimkan produk.",
    examples: [
      "Toko online dengan harga yang terlalu murah",
      "Promosi berlebihan tanpa detail kontak jelas",
      "Toko yang hanya menerima pembayaran via transfer bank"
    ]
  },
  {
    icon: <CreditCard className="text-indigo-500" />,
    title: "Penipuan Investasi",
    description: "Skema investasi palsu yang menjanjikan keuntungan besar dengan risiko kecil.",
    examples: [
      "Investasi crypto dengan 'jaminan' keuntungan",
      "Skema Ponzi atau money game",
      "Investasi 'eksklusif' dengan batas waktu mendesak"
    ]
  }
];

const Edukasi: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-morphism rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BookOpen className="text-blue-600" size={24} />
            <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
              Edukasi Pencegahan Penipuan
            </h1>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-center text-gray-700 mb-8">
              Memahami berbagai jenis penipuan online adalah langkah pertama untuk melindungi diri. 
              Pelajari ciri-ciri umum dan cara mengenali penipuan di bawah ini.
            </p>
          </div>
        </motion.div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {scamTypes.map((scam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="neo-morphism rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-lg bg-gray-50">
                  {scam.icon}
                </div>
                <h2 className="text-xl font-display font-semibold text-gray-900">
                  {scam.title}
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                {scam.description}
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <AlertCircle size={16} className="text-yellow-500 mr-2" />
                  Contoh:
                </h3>
                <ul className="space-y-2">
                  {scam.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        {i + 1}
                      </span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 glass-morphism rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">
            Langkah-Langkah untuk Melindungi Diri
          </h2>
          
          <ol className="space-y-4">
            <li className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Selalu verifikasi pengirim</p>
              <p className="text-gray-700 text-sm">Periksa alamat email, nomor telepon, atau URL dengan teliti sebelum merespons atau mengklik.</p>
            </li>
            <li className="p-4 bg-green-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Jangan terburu-buru</p>
              <p className="text-gray-700 text-sm">Penipu sering menciptakan rasa urgensi. Luangkan waktu untuk memeriksa keabsahan pesan.</p>
            </li>
            <li className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Lindungi data sensitif</p>
              <p className="text-gray-700 text-sm">Jangan pernah membagikan password, PIN, OTP, atau informasi rekening bank via pesan atau panggilan telepon.</p>
            </li>
            <li className="p-4 bg-purple-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Gunakan layanan verifikasi</p>
              <p className="text-gray-700 text-sm">Manfaatkan aplikasi seperti Safeguard Nusantara untuk memeriksa keamanan pesan atau tautan.</p>
            </li>
            <li className="p-4 bg-indigo-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Laporkan penipuan</p>
              <p className="text-gray-700 text-sm">Jika Anda menemukan aktivitas mencurigakan, laporkan ke pihak berwenang dan platform terkait.</p>
            </li>
          </ol>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Edukasi;
