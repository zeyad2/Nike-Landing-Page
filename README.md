# Nike Landing Page - Modern E-commerce Landing Page

A responsive, modern Nike landing page built with React and Tailwind CSS, featuring a sleek design and smooth user experience. This project demonstrates modern web development practices with a focus on performance, accessibility, and maintainable code architecture.

## 🚀 Live Demo

**[Deployed to Vercel]** - [https://nike-landing-page-git-main-zeyadmohamed.vercel.app/]

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **Interactive Elements**: Carousel sliders, hover effects, and dynamic content
- **SEO Friendly**: Proper meta tags and semantic structure

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Latest React with modern hooks and features
- **Vite 6.3.5** - Lightning-fast build tool and development server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework for rapid UI development
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### UI Components & Libraries
- **React Slick** - Carousel/slider component for product showcases
- **Custom SVG Icons** - Scalable vector graphics for crisp visuals
- **Responsive Images** - Optimized image assets for different screen sizes

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript Support** - Type definitions for better development experience
- **Hot Module Replacement** - Instant feedback during development

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Nav.jsx         # Navigation component
│   ├── ShoeCard.jsx    # Product card component
│   ├── ServiceCard.jsx # Service feature card
│   ├── ReviewCard.jsx  # Customer review card
│   └── PopularProductCard.jsx # Featured product card
├── sections/           # Page sections and layouts
│   ├── Hero.jsx        # Hero section with main CTA
│   ├── PopularProducts.jsx # Product showcase section
│   ├── SuperQuality.jsx # Quality features section
│   ├── Services.jsx    # Service offerings section
│   ├── SpecialOffer.jsx # Promotional section
│   ├── CustomerReviews.jsx # Testimonials section
│   ├── Subscribe.jsx   # Newsletter subscription
│   └── Footer.jsx      # Site footer
├── assets/            # Static assets
│   ├── images/        # Product and UI images
│   └── icons/         # SVG icons and graphics
├── constants/         # Data and configuration
│   └── index.js       # App constants and data
└── App.jsx           # Main application component
```

## 🎯 Key Features Implemented

### 1. **Hero Section**
- Dynamic product showcase with image carousel
- Compelling call-to-action buttons
- Statistics display (brands, shops, customers)

### 2. **Product Showcase**
- Interactive product cards with hover effects
- Price display and product information
- Responsive grid layout

### 3. **Service Features**
- Three key service highlights (Free shipping, Secure Payment, Support)
- Icon-based visual representation
- Clear value propositions

### 4. **Customer Reviews**
- Testimonial carousel with customer feedback
- Star ratings and customer photos
- Social proof elements

### 5. **Newsletter Subscription**
- Email capture form
- Modern form design with validation
- Call-to-action optimization


## 🎨 Design Philosophy

This project follows modern design principles:

- **Mobile-First Approach**: Responsive design starting from mobile devices
- **Clean Typography**: Clear hierarchy and readable fonts
- **Consistent Spacing**: Systematic use of Tailwind's spacing scale
- **Accessible Colors**: High contrast ratios for better readability
- **Smooth Interactions**: Subtle animations and hover effects

## 📱 Responsive Design

The website is fully responsive with breakpoints.

## 🔧 Customization

### Styling
- All styles are managed through Tailwind CSS classes
- Custom colors and spacing can be modified in `tailwind.config.js`
- Component-specific styles are co-located with components
