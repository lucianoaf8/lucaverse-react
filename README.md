# Lucaverse React App

A modern, futuristic React implementation of the Lucaverse website with animated background, interactive elements, and cyberpunk aesthetics.

## Overview

This project is a React conversion of a vanilla HTML/CSS/JS website. It features:

- Interactive animated canvas background with neon particles
- Glitch text effects and hover animations
- Responsive design with mobile support
- Component-based architecture for easy maintenance

## Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lucaverse-react.git
   cd lucaverse-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
lucaverse-react/
├── public/                 # Static files
│   ├── index.html          # HTML template
│   ├── avatar-luca.png     # Avatar image
│   └── favicon.ico         # Favicon
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── BackgroundCanvas/  # Animated canvas background
│   │   ├── Header/         # Navigation header
│   │   ├── MainContent/    # Main page content
│   │   ├── FloatingPanel/  # Floating info panels
│   │   ├── Footer/         # Page footer
│   │   └── CTAButton/      # Call-to-action button
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
└── package.json            # Dependencies and scripts
```

## Component Details

### BackgroundCanvas
The animated background with neon particles and connections. Uses React's useRef and useEffect hooks to manage the canvas.

### Header
Navigation bar with glitch effect links.

### CTAButton
Reusable call-to-action button with hover animations.

### FloatingPanel
Reusable component for the floating information panels with glow effects.

### MainContent
Main content section with welcome message and floating panels.

### Footer
Fixed footer with copyright information and links.

## Styling

The project uses:
- CSS modules for component styling
- Tailwind CSS for layout (via CDN)
- Custom CSS for animations and effects

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects the create-react-app configuration

## Learn More

- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://create-react-app.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/)

## Credits

- Original design: Luca137
- React conversion: Your Name