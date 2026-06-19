/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy / charcoal cooling base
        abyss: '#050b16',
        midnight: '#091627',
        steel: '#0f2440',
        // Icy / cool accents
        ice: '#7ad7ff',
        frost: '#bdecff',
        teal: '#27d6c4',
        glacier: '#3a9dff',
        silver: '#c8d6e6',
      },
      fontFamily: {
        // Distinctive Arabic display + body pairing (loaded in index.html)
        display: ['Cairo', 'Tajawal', 'sans-serif'],
        body: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(122, 215, 255, 0.45)',
        'glow-teal': '0 0 45px -6px rgba(39, 214, 196, 0.45)',
        card: '0 24px 60px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'cool-radial':
          'radial-gradient(circle at 20% 20%, rgba(58,157,255,0.18), transparent 45%), radial-gradient(circle at 85% 30%, rgba(39,214,196,0.14), transparent 40%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateX(-180px) translateY(40px)', opacity: '0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        'spin-slow': 'spinSlow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
