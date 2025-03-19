
# SafeGuard Nusantara

A web-based scam detection tool to help Indonesian citizens identify and prevent potential scams through text analysis.

## Product Requirements Document (PRD)

### Overview

SafeGuard Nusantara is a scam detection application that leverages Google's Gemini AI to analyze text and identify potential scams. It provides real-time analysis and feedback collection to continuously improve its detection capabilities.

### Key Features

- 🔍 Real-time text analysis for scam detection
- 🤖 AI-powered threat assessment using Google Gemini
- 📊 Three-level threat classification (Aman, Mencurigakan, Berbahaya)
- 💬 Detailed explanation for each analysis
- ⭐ User feedback system
- 📱 Mobile-responsive design

### Target Users

- Indonesian citizens
- Anyone who wants to verify suspicious messages
- People who want to learn about common scam patterns

## Technical Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Tailwind CSS + shadcn/ui
- **AI/ML**: Google Gemini API
- **Database**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/safeguard-nusantara.git
cd safeguard-nusantara
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

Add your API keys to the `.env` file:

```plaintext
VITE_SUPABASE_URL="your_supabase_url"
VITE_SUPABASE_ANON_KEY="your_supabase_key"
VITE_GEMINI_API_KEY="your_gemini_api_key"
```

4. Start development server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Deployment

The application is deployed at [safeguard.mikascend.xyz](https://safeguard.mikascend.xyz)

### Manual Deployment Steps

1. Build the project

```bash
npm run build
```

2. Install Vercel CLI

```bash
npm install -g vercel
```

3. Deploy

```bash
vercel
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- All API keys are stored in environment variables
- Rate limiting is implemented for API endpoints
- Input sanitization is in place for all user inputs
- CORS policies are properly configured

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/safeguard-nusantara](https://github.com/yourusername/safeguard-nusantara)
