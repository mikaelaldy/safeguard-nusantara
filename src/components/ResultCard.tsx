
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, ShieldX, AlertTriangle } from 'lucide-react';

export type SafetyLevel = 'aman' | 'mencurigakan' | 'berbahaya' | null;

interface ResultCardProps {
  safetyLevel: SafetyLevel;
  explanation: string;
  isLoading: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ safetyLevel, explanation, isLoading }) => {
  if (!safetyLevel && !isLoading) return null;
  
  const getStatusIcon = () => {
    if (isLoading) return <Shield className="text-gray-400 animate-pulse" size={32} />;
    
    switch (safetyLevel) {
      case 'aman':
        return <ShieldCheck className="text-status-safe" size={32} />;
      case 'mencurigakan':
        return <ShieldAlert className="text-status-warning" size={32} />;
      case 'berbahaya':
        return <ShieldX className="text-status-danger" size={32} />;
      default:
        return <Shield className="text-gray-400" size={32} />;
    }
  };
  
  const getStatusColor = () => {
    if (isLoading) return 'bg-gray-100';
    
    switch (safetyLevel) {
      case 'aman':
        return 'bg-green-50 border-green-200';
      case 'mencurigakan':
        return 'bg-yellow-50 border-yellow-200';
      case 'berbahaya':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };
  
  const getStatusText = () => {
    if (isLoading) return 'Menganalisis...';
    
    switch (safetyLevel) {
      case 'aman':
        return 'Aman';
      case 'mencurigakan':
        return 'Mencurigakan';
      case 'berbahaya':
        return 'Berbahaya';
      default:
        return 'Tidak Diketahui';
    }
  };
  
  const getStatusTextColor = () => {
    if (isLoading) return 'text-gray-600';
    
    switch (safetyLevel) {
      case 'aman':
        return 'text-status-safe';
      case 'mencurigakan':
        return 'text-status-warning';
      case 'berbahaya':
        return 'text-status-danger';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full max-w-2xl mx-auto mt-8"
    >
      <div className={`rounded-2xl p-6 border ${getStatusColor()} transition-colors duration-300`}>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="p-4 rounded-full bg-white shadow-soft">
            {getStatusIcon()}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <h3 className={`text-xl font-display font-bold ${getStatusTextColor()}`}>
                {getStatusText()}
              </h3>
              
              {safetyLevel === 'mencurigakan' && (
                <span className="inline-flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  <AlertTriangle size={12} className="mr-1" />
                  Waspada
                </span>
              )}
              
              {safetyLevel === 'berbahaya' && (
                <span className="inline-flex items-center text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                  <AlertTriangle size={12} className="mr-1" />
                  Hindari
                </span>
              )}
            </div>
            
            <p className="text-gray-700">
              {isLoading ? (
                <span className="flex flex-col gap-2">
                  <span className="h-4 w-full bg-gray-200 animate-shimmer rounded"></span>
                  <span className="h-4 w-3/4 bg-gray-200 animate-shimmer rounded"></span>
                </span>
              ) : (
                explanation
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
