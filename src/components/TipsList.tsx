
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, Lock, BrainCircuit } from 'lucide-react';

interface Tip {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const tips: Tip[] = [
  {
    icon: <AlertTriangle className="text-yellow-500" size={20} />,
    title: "Waspada Tawaran Menggiurkan",
    description: "Tawaran yang terlalu bagus untuk menjadi kenyataan biasanya adalah penipuan. Berhati-hatilah dengan janji keuntungan besar atau hadiah mendadak."
  },
  {
    icon: <Check className="text-green-500" size={20} />,
    title: "Verifikasi Pengirim",
    description: "Selalu periksa alamat email atau nomor telepon pengirim. Pengirim resmi biasanya memiliki domain email resmi dan tidak menggunakan layanan email gratis."
  },
  {
    icon: <Lock className="text-blue-500" size={20} />,
    title: "Jangan Berbagi Informasi Sensitif",
    description: "Instansi resmi tidak akan pernah meminta password, PIN, atau kode OTP Anda melalui pesan. Jangan pernah membagikan informasi pribadi sensitif."
  },
  {
    icon: <BrainCircuit className="text-purple-500" size={20} />,
    title: "Hindari Klik Tergesa-gesa",
    description: "Jangan terburu-buru mengklik tautan mencurigakan. Arahkan kursor ke tautan untuk melihat URL aslinya atau gunakan layanan pemeriksa tautan online."
  }
];

const TipsList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto mt-8"
    >
      <div className="glass-morphism rounded-2xl p-6">
        <h2 className="text-lg font-display font-semibold mb-4 text-gray-900">
          Tips Pencegahan Penipuan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="neo-morphism rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-gray-50">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TipsList;
