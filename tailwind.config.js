/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      amber: {
        500: "#f59e0b",
      },
      gray: {
        900: "#111827",
        800: "#1f2937",
      },
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
      keyframes: {
        'breathe-1': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' }
        },
        'breathe-2': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.4' }
        },
        'breathe-3': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.15)', opacity: '0.5' }
        },
        'breathe-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.95)' },
          '50%': { opacity: '0.5', transform: 'scale(1)' }
        },
        'tech-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(2deg)' },
          '75%': { transform: 'translateY(8px) rotate(-2deg)' }
        },
        'tech-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.4)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(245, 158, 11, 0.2)'
          }
        },
        'tech-grid': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' }
        },
        'tech-glitch': {
          '0%, 100%': { clip: 'rect(0, 9999px, 2px, 0)' },
          '25%': { clip: 'rect(0, 9999px, 4px, 0)' },
          '50%': { clip: 'rect(0, 9999px, 1px, 0)' },
          '75%': { clip: 'rect(0, 9999px, 3px, 0)' }
        },
        'tech-scan': {
          '0%': { transform: 'translateY(-100%)', opacity: '0.5' },
          '50%': { transform: 'translateY(100%)', opacity: '0.7' },
          '100%': { transform: 'translateY(-100%)', opacity: '0.5' }
        },
        'tech-circuit': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }
        },
        'tech-blink': {
          '0%, 100%': { opacity: '1' },
          '25%': { opacity: '0.4' },
          '75%': { opacity: '0.6' }
        },
        'tech-wave': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'float-n': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'float-s': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' }
        },
        'float-e': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' }
        },
        'float-w': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-20px)' }
        },
        'float-ne': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(15px, -15px)' }
        },
        'float-nw': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-15px, -15px)' }
        },
        'float-se': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(15px, 15px)' }
        },
        'float-sw': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-15px, 15px)' }
        },
        'tech-shell-spin': {
          '0%': { transform: 'rotate(0deg) scale(0.8)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(0.8)' }
        },
        'line-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(1)' },
          '50%': { opacity: '0.7', transform: 'scaleX(1.5)' }
        },
        'line-flow': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'line-glow': {
          '0%, 100%': { filter: 'brightness(1) blur(4px)' },
          '50%': { filter: 'brightness(1.5) blur(6px)' }
        },
        'text-shimmer': {
          '0%, 100%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '0% 50%' }
        },
        'pen-write': {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' }
        },
        'text-focus': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' }
        },
        'signature-appear': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'ink-splash': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0.2' }
        },
        'borderFlow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'borderFlowReverse': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        'breathe-1': 'breathe-1 4s ease-in-out infinite',
        'breathe-2': 'breathe-2 4s ease-in-out infinite 0.5s',
        'breathe-3': 'breathe-3 4s ease-in-out infinite 1s',
        'breathe-glow': 'breathe-glow 4s ease-in-out infinite',
        'tech-float': 'tech-float 6s ease-in-out infinite',
        'tech-pulse': 'tech-pulse 3s ease-in-out infinite',
        'tech-grid': 'tech-grid 3s linear infinite',
        'tech-glitch': 'tech-glitch 4s steps(100) infinite',
        'tech-scan': 'tech-scan 4s ease-in-out infinite',
        'tech-circuit': 'tech-circuit 20s linear infinite',
        'tech-blink': 'tech-blink 2s ease-in-out infinite',
        'tech-wave': 'tech-wave 20s linear infinite',
        'float-n': 'float-n 3s ease-in-out infinite',
        'float-s': 'float-s 3s ease-in-out infinite',
        'float-e': 'float-e 3s ease-in-out infinite',
        'float-w': 'float-w 3s ease-in-out infinite',
        'float-ne': 'float-ne 3s ease-in-out infinite',
        'float-nw': 'float-nw 3s ease-in-out infinite',
        'float-se': 'float-se 3s ease-in-out infinite',
        'float-sw': 'float-sw 3s ease-in-out infinite',
        'tech-shell-spin': 'tech-shell-spin 8s linear infinite',
        'line-pulse': 'line-pulse 2s ease-in-out infinite',
        'line-flow': 'line-flow 3s linear infinite',
        'line-glow': 'line-glow 4s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'pen-write': 'pen-write 3s ease-in-out forwards',
        'text-focus': 'text-focus 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards',
        'signature-appear': 'signature-appear 2s ease-out forwards',
        'ink-splash': 'ink-splash 2s ease-out forwards',
        'borderFlow': 'borderFlow 3s linear infinite',
        'borderFlowReverse': 'borderFlowReverse 3s linear infinite',
      }
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
      handwriting: ['"Caveat"', 'cursive'],
      elegant: ['"Playfair Display"', 'serif'],
      modern: ['"Outfit"', 'sans-serif'],
      signature: ['"Dancing Script"', 'cursive']
    },
  },
  plugins: [],
};
