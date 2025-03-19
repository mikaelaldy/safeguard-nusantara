
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ScanForm from '@/components/ScanForm';
import ResultCard, { SafetyLevel } from '@/components/ResultCard';
import TipsList from '@/components/TipsList';
import FeedbackForm from '@/components/FeedbackForm';
import { toast } from 'sonner';
import { analyzeText } from '@/utils/gemini';

interface ScanResult {
  safetyLevel: SafetyLevel;
  explanation: string;
}

const Index: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanId, setScanId] = useState<string>('');

  const handleScan = async (text: string) => {
    setIsScanning(true);
    setResult(null);
    
    try {
      // Generate a simple scan ID (in a real app, this would come from the backend)
      const newScanId = `scan_${new Date().getTime()}`;
      setScanId(newScanId);
      
      // Use the Gemini API to analyze the text
      const scanResult = await analyzeText(text);
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
        
        {result && !isScanning && (
          <FeedbackForm scanId={scanId} />
        )}
        
        {(result || isScanning) && <TipsList />}
      </div>
    </Layout>
  );
};

export default Index;
