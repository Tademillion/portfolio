# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio showcases your skills, projects, and contact information in a professional and engaging way.

## Features

- Responsive design that works on all devices
- Smooth scrolling and animations
- Project showcase with carousel
- Skills section with progress bars
- Contact form
- Modern UI with custom styling
- Dark theme optimized for readability

## Technologies Used

- React
- Tailwind CSS
- Framer Motion for animations
- React Icons
- React Scroll for smooth scrolling
- React Intersection Observer for scroll animations

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information
Update your personal information in the following components:
- `Hero.js`: Update name, title, and social media links
- `About.js`: Update bio and skills
- `Projects.js`: Add your own projects
- `Contact.js`: Update contact information

### Styling
The color scheme can be modified in `tailwind.config.js`. The current theme uses:
- Primary: #0a192f (dark blue)
- Secondary: #64ffda (teal)
- Text Primary: #ccd6f6 (light blue)
- Text Secondary: #8892b0 (gray)

### Images
Add your project images to the `public/images` directory and update the image paths in the `Projects.js` component.

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
