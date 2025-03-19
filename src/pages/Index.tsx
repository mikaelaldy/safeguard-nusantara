
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ScanForm from '@/components/ScanForm';
import ResultCard, { SafetyLevel } from '@/components/ResultCard';
import TipsList from '@/components/TipsList';
import { toast } from 'sonner';

interface ScanResult {
  safetyLevel: SafetyLevel;
  explanation: string;
}

// Simulate API call
const analyzeScan = async (text: string): Promise<ScanResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simple detection logic (this would be replaced by the Gemini API)
  const lowercaseText = text.toLowerCase();
  
  if (
    lowercaseText.includes('jackpot') || 
    lowercaseText.includes('hadiah') && lowercaseText.includes('gratis') ||
    lowercaseText.includes('klik disini') ||
    lowercaseText.includes('whatsapp-') ||
    lowercaseText.includes('urgent') && lowercaseText.includes('transfer')
  ) {
    return {
      safetyLevel: 'berbahaya',
      explanation: 'Teks ini memiliki ciri-ciri penipuan, seperti tawaran hadiah mencurigakan atau permintaan tindakan mendesak. Sebaiknya jangan direspon atau diklik.'
    };
  } else if (
    lowercaseText.includes('verifikasi') || 
    lowercaseText.includes('konfirmasi') && lowercaseText.includes('akun') ||
    lowercaseText.includes('promosi') && lowercaseText.includes('langsung') ||
    lowercaseText.includes('undian') ||
    lowercaseText.includes('bit.ly') || 
    lowercaseText.includes('tinyurl')
  ) {
    return {
      safetyLevel: 'mencurigakan',
      explanation: 'Teks ini mengandung beberapa elemen yang mencurigakan, seperti tautan singkat atau permintaan verifikasi. Berhati-hatilah dan lakukan pengecekan tambahan.'
    };
  } else {
    return {
      safetyLevel: 'aman',
      explanation: 'Teks ini tampak aman dan tidak menunjukkan tanda-tanda penipuan yang umum. Meski demikian, tetap waspada saat berinteraksi di internet.'
    };
  }
};

const Index: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async (text: string) => {
    setIsScanning(true);
    setResult(null);
    
    try {
      const scanResult = await analyzeScan(text);
      setResult(scanResult);
      
      // Show toast based on result
      if (scanResult.safetyLevel === 'berbahaya') {
        toast.error('Konten berbahaya terdeteksi! Harap waspada.', {
          icon: '⚠️',
        });
      } else if (scanResult.safetyLevel === 'mencurigakan') {
        toast.warning('Konten mencurigakan terdeteksi. Berhati-hatilah!', {
          icon: '⚠️',
        });
      } else {
        toast.success('Konten tampaknya aman.', {
          icon: '✓',
        });
      }
    } catch (error) {
      console.error('Scan error:', error);
      toast.error('Terjadi kesalahan saat memindai. Silakan coba lagi.');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ScanForm onScan={handleScan} isScanning={isScanning} />
        
        <ResultCard 
          safetyLevel={result?.safetyLevel || null}
          explanation={result?.explanation || ''}
          isLoading={isScanning}
        />
        
        {(result || isScanning) && <TipsList />}
      </div>
    </Layout>
  );
};

export default Index;
