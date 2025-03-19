import { RateLimiterMemory } from 'rate-limiter-flexible'

export const rateLimiter = new RateLimiterMemory({
  points: 20, // Number of feedback submissions
  duration: 3600 // Per hour
})