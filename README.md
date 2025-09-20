# 🎬 Movie Discovery App

A modern movie discovery application built with **Next.js 14** and **TypeScript**. Browse through a curated collection of movies, view detailed information, and watch trailers in a beautiful, responsive interface.

## ✨ Features

- 🏠 **Home Page** - Browse all available movies
- 🎥 **Movie Details** - Detailed information for each movie
- 🎬 **Movie Trailers** - Watch trailers and videos
- 🧭 **Navigation** - Interactive navigation with active state indicators
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Loading** - Optimized with Suspense boundaries
- 🎨 **Modern UI** - Clean and intuitive user interface

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Runtime**: React 18
- **Styling**: CSS (ready for Tailwind or styled-components)
- **API**: External movie API integration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learn-nestjs14
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
app/
├── (home)/                    # Home route group
│   ├── loading.tsx           # Loading UI for home page
│   └── page.tsx              # Home page with movie list
├── (movies)/                 # Movies route group
│   └── movies/
│       └── [id]/            # Dynamic movie detail pages
│           ├── error.tsx    # Error boundary
│           ├── loading.tsx  # Loading UI
│           └── page.tsx     # Movie detail page
├── about-us/                # About us pages
│   ├── company/jobs/sales/  # Nested routing example
│   ├── layout.tsx           # Layout for about pages
│   └── page.tsx             # About us page
├── components/              # Reusable components
│   ├── movie-info.tsx       # Movie information component
│   ├── movie-videos.tsx     # Movie videos component
│   └── navigation.tsx       # Navigation component
├── layout.tsx               # Root layout
└── not-found.tsx           # 404 page
```

## 🎯 Key Features Explained

### Dynamic Routing
- **Movie Details**: Each movie has its own page using dynamic routes (`[id]`)
- **Nested Layouts**: Different layouts for different sections

### Performance Optimization
- **Suspense Boundaries**: Loading states for better user experience
- **Server Components**: Leveraging Next.js 14 app router for optimal performance

### Interactive Elements
- **Navigation State**: Real-time active state indicators
- **Counter Component**: Interactive state management example

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 API Integration

The app integrates with an external movie API:
```typescript
const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
```

## 🎨 Customization

### Adding New Movies
Movies are fetched from the external API. To add new movies, update the API endpoint or create a local database.

### Styling
The app is ready for styling frameworks. Consider adding:
- Tailwind CSS for utility-first styling
- Styled Components for component-based styling
- CSS Modules for scoped styling

## 📱 Responsive Design

The application is built with mobile-first principles and works seamlessly across:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Movie data provided by [Nomad Movies API](https://nomad-movies.nomadcoders.workers.dev/)
- Icons and emojis for visual appeal

---

<div align="center">
  <strong>Made with ❤️ and Next.js 14</strong>
</div>
