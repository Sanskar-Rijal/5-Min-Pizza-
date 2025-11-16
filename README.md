# 🍕 5-Min Pizza

A modern, fast pizza ordering application built with React. Order pizzas, track delivery status, and get your food in minutes!

---

## 🚀 Features

- **Browse Menu** - View available pizzas with images, ingredients, and prices
- **Smart Cart** - Add/remove items with quantity controls and live price updates
- **Order Tracking** - Real-time order status and estimated delivery time
- **Geolocation** - Auto-fill address using browser location
- **Priority Orders** - Pay extra for faster delivery
- **Form Validation** - Phone number validation and error handling
- **Smooth Animations** - Pizza flies to cart when added (yes, really! 🍕✨)
- **Responsive Design** - Works beautifully on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

### Frontend (this repo)

- **React 19** - UI library with hooks
- **React Router v6** - Client-side routing with loaders/actions
- **Redux Toolkit** - Global state management (cart + user)
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool and dev server

### Backend

- **Repository**: [5-min-pizza-backend](https://github.com/Sanskar-Rijal/5-min-pizza-backend)
- Handles menu data, order creation, and order lookup
- See backend repo for setup instructions

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 16+ and npm installed
- Backend API running (see [backend setup](https://github.com/Sanskar-Rijal/5-min-pizza-backend))

### Frontend Setup

1. **Clone the repository**

```bash
git clone https://github.com/Sanskar-Rijal/5-Min-Pizza-.git
cd 5-Min-Pizza-
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5174` (or port shown in terminal)

### Backend Setup

The app requires the backend API to function. Clone and run the backend:

```bash
git clone https://github.com/Sanskar-Rijal/5-min-pizza-backend.git
cd 5-min-pizza-backend
npm install
npm run dev
```

See the [backend README](https://github.com/Sanskar-Rijal/5-min-pizza-backend) for detailed setup.

---

## 📁 Project Structure

```
src/
├── features/          # Feature-based modules
│   ├── cart/         # Shopping cart (Redux slice, components)
│   ├── menu/         # Pizza menu (loader, items)
│   ├── order/        # Order creation and tracking
│   └── user/         # User data (Redux slice, geolocation)
├── services/         # API client functions
│   ├── apiRestaurant.js  # Menu & orders API
│   └── apiGeocoding.js   # Reverse geocoding
├── ui/               # Reusable UI components
│   ├── AppLayout.jsx
│   ├── Header.jsx
│   └── Button.jsx
└── utils/            # Helper functions
    ├── helpers.js    # Date/currency formatting
    └── flyToCart.js  # Pizza fly animation
```

---

## 🎯 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start Vite dev server            |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |

---

## 🌐 Deployment

This project is configured for **Vercel** deployment with SPA routing support via `vercel.json`.

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects Vite config and deploys
4. Update backend URL if needed (environment variables)

**Note**: The `vercel.json` file ensures client-side routes work correctly by serving `index.html` for all paths.

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this project for learning or your own pizza business! 🍕

**Hungry for more?** Check out the [Instagram reel](https://www.instagram.com/reel/DFX88hxTyns/?igsh=eGF1ZWNiZmw5dDkx)🎥
