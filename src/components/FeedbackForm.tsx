import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Star, Info, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { feedbackService } from '@/lib/feedback-service';

interface FeedbackFormProps {
  scanId?: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ scanId }) => {
  const [isAccurate, setIsAccurate] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAccuracySelection = (accurate: boolean) => {
    setIsAccurate(accurate);
  };

  const handleRatingSelection = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const feedback = {
        scan_id: scanId || '',
        is_accurate: isAccurate || false,
        rating,
        comment,
      };

      await feedbackService.submit(feedback);
      
      // Log the feedback data (in a real app, you'd send this to a server)
      console.log({
        scanId,
        isAccurate,
        rating,
        comment,
        timestamp: new Date().toISOString()
      });
      
      // Show success message
      toast.success('Terima kasih atas umpan balik Anda!');
      
      // Reset form
      setIsAccurate(null);
      setRating(0);
      setComment('');
      
      // Close dialog
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Gagal mengirim umpan balik. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full mt-4 border-blue-200 hover:bg-blue-50 text-blue-600"
        >
          <Info size={16} className="mr-2" />
          Berikan Umpan Balik
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Umpan Balik Hasil Pemindaian</DialogTitle>
          <DialogDescription className="text-center">
            Bantu kami meningkatkan akurasi layanan dengan memberikan umpan balik Anda
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Apakah hasil pemindaian akurat?</p>
            <div className="flex gap-4 justify-center">
              <Button 
                type="button" 
                variant={isAccurate === true ? "default" : "outline"}
                className={isAccurate === true ? "bg-green-500 hover:bg-green-600" : ""}
                onClick={() => handleAccuracySelection(true)}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                Akurat
              </Button>
              <Button 
                type="button" 
                variant={isAccurate === false ? "default" : "outline"}
                className={isAccurate === false ? "bg-red-500 hover:bg-red-600" : ""}
                onClick={() => handleAccuracySelection(false)}
              >
                <ThumbsDown className="mr-2 h-4 w-4" />
                Tidak Akurat
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Beri Rating Kegunaan</p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingSelection(star)}
                  className={`p-1 rounded-full transition-colors ${
                    rating >= star 
                      ? 'text-yellow-500 hover:text-yellow-600' 
                      : 'text-gray-300 hover:text-gray-400'
                  }`}
                >
                  <Star className="h-6 w-6" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Komentar Tambahan (Opsional)</p>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Bagikan pengalaman atau saran Anda..."
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
        
        <DialogFooter className="sm:justify-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsDialogOpen(false)}
            disabled={isSubmitting}
          >
            Batal
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isAccurate === null || rating === 0 || isSubmitting}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isSubmitting ? (
              <>Mengirim...</>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                Kirim Umpan Balik
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackForm;
