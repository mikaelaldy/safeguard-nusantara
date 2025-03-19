
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader, X, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ScanFormProps {
  onScan: (text: string) => void;
  isScanning: boolean;
}

const ScanForm: React.FC<ScanFormProps> = ({ onScan, isScanning }) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onScan(input.trim());
    } else {
      toast.error('Mohon masukkan teks atau URL untuk diperiksa');
    }
  };
  
  const handleClear = () => {
    setInput('');
  };
  
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
      toast.success('Teks berhasil ditempel');
    } catch (err) {
      toast.error('Tidak dapat mengakses clipboard');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-morphism rounded-2xl p-6 md:p-8">
        <h2 className="text-center font-display font-medium text-sm uppercase tracking-wider text-blue-600 mb-2">
          <span className="inline-block px-3 py-1 bg-blue-100 rounded-full">Sistem Perlindungan</span>
        </h2>
        <h1 className="text-center text-2xl md:text-3xl font-display font-bold mb-6 text-gray-900">
          Periksa Pesan atau URL Mencurigakan
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-3.5 text-gray-400">
              <Search size={18} />
            </div>
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tempel pesan atau URL yang ingin Anda periksa di sini..."
              className="w-full px-10 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none transition-all resize-none min-h-[120px] text-gray-700"
            />
            
            <AnimatePresence>
              {input && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              type="button"
              variant="outline"
              className="flex-1 py-2 px-4 neo-morphism rounded-xl text-gray-700 flex items-center justify-center gap-2"
              onClick={handlePaste}
              disabled={isScanning}
            >
              <Copy size={16} />
              <span>Tempel</span>
            </Button>
            
            <Button
              type="submit"
              className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all disabled:opacity-70"
              disabled={!input.trim() || isScanning}
            >
              {isScanning ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  <span>Memeriksa...</span>
                </>
              ) : (
                <>
                  <Search size={16} />
                  <span>Periksa Sekarang</span>
                </>
              )}
            </Button>
          </div>
        </form>
        
        <p className="mt-4 text-sm text-gray-500 text-center">
          Masukkan pesan WhatsApp, email, SMS, atau URL yang ingin Anda verifikasi keamanannya
        </p>
      </div>
    </motion.div>
  );
};

export default ScanForm;
