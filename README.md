# Naturaluna Shopify Sales Strategy Dashboard

This project visualizes sales strategy data for Naturaluna's Shopify store, including customer acquisition, traffic sources, offer effectiveness, and LTV growth metrics.

## Deployment

### Live Demo
- **URL**: [https://shopify-ten-ashy.vercel.app](https://shopify-ten-ashy.vercel.app)
- **Deployed on**: Vercel
- **GitHub Repository**: [https://github.com/takayukey009/shopify](https://github.com/takayukey009/shopify)

## Run Locally

**Prerequisites:**
- Node.js (v18+)
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/takayukey009/shopify.git
   cd shopify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Build for Production

```bash
npm run build
```

## Key Features

- Interactive data visualizations using Recharts
- Responsive design for desktop and mobile
- TypeScript for type safety
- Vite for fast development and optimized builds

## Project Structure

- `components/` - React components
  - `charts/` - Chart components using Recharts
- `constants.ts` - Data and configuration constants
- `types.ts` - TypeScript type definitions
- `index.tsx` - Application entry point
