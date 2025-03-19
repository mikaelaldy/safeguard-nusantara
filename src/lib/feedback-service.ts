// filepath: c:\side projects\Dicoding Challanges\tema security\safeguard-nusantara\scamguard-nusantara\src\lib\feedback-service.ts
import { supabase } from './supabase'

export interface Feedback {
  scan_id: string
  is_accurate: boolean
  rating: number
  comment?: string
}

export const feedbackService = {
  async submit(feedback: Feedback) {
    const { data, error } = await supabase
      .from('feedback')
      .insert([feedback])
      .select()

    if (error) throw error
    return data
  },

  async getFeedbackByScanId(scanId: string) {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .eq('scan_id', scanId)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  async getAllFeedback() {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}