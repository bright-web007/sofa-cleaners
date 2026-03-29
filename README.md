# SofaCleaner.org

A comprehensive marketplace platform connecting customers with professional sofa and upholstery cleaning services across the UK.

## 🚀 Features

- **Location-Based Search**: Find cleaners in your specific area with detailed coverage maps
- **Service Comparison**: Compare prices, services, and customer reviews
- **Multiple Contact Channels**: WhatsApp, Telegram, phone, and web chat integration
- **Responsive Design**: Mobile-first approach for optimal user experience
- **SEO Optimized**: Full technical SEO implementation with structured data
- **Type-Safe Development**: Complete TypeScript implementation

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components
│   └── layout/            # Layout components
├── lib/
│   ├── data/              # Mock data (JSON files)
│   ├── constants.ts       # Site constants
│   ├── utils.ts          # Utility functions
│   └── metadata.ts       # Metadata helpers
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#7B3FA0` (Purple)
- **Secondary**: `#F5F0FA` (Light Purple)
- **Accent**: `#E8A020` (Gold)
- **WhatsApp**: `#25D366` (Green)

### Typography
- **Font**: Inter (Variable)
- **Scale**: 14px base to 48px headings

## 📊 Data Structure

### Core Entities
- **Cleaners**: Service providers with ratings, coverage, and pricing
- **Reviews**: Customer feedback with ratings and detailed comments
- **Cities**: UK locations with areas and postal codes
- **Services**: Different cleaning services with descriptions and FAQs
- **Blog Posts**: SEO content for engagement and authority

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sofacleaner.git
cd sofacleaner
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Components

### UI Components
- `Button` - Primary, secondary, and outline variants
- `Badge` - Status and category indicators
- `Card` - Content containers with various styles
- `StarRating` - Interactive and display rating components
- `Input/Textarea/Select` - Form input components
- `Modal` - Overlay dialogs and popups
- `Spinner` - Loading indicators

### Layout Components
- `Navbar` - Main navigation with mobile menu
- `Footer` - Site footer with links and contact info
- `ChannelSelectModal` - Contact method selection modal

## 🔧 Configuration

### Environment Variables
See `.env.example` for all available configuration options.

### SEO Configuration
- Automatic sitemap generation
- OpenGraph and Twitter meta tags
- JSON-LD structured data
- Optimized robots.txt

## 📈 Performance

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Bundle Optimization**: Tree shaking and code splitting
- **Security Headers**: CSP, HSTS, and XSS protection
- **Caching Strategy**: Static assets and API responses

## 🧪 Development

### Code Quality
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Tailwind CSS organization

### Testing
```bash
npm run test        # Run tests
npm run test:watch  # Watch mode
npm run lint        # Run linter
npm run build       # Production build
```

## 📦 Deployment

The application is optimized for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Build Commands
```bash
npm run build       # Create production build
npm run start       # Start production server
npm run export      # Static export (if needed)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@sofacleaner.org
- Website: [https://sofacleaner.org](https://sofacleaner.org)

---

Built with ❤️ for connecting customers with quality cleaning services.