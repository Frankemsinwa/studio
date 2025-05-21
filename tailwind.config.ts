
import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'bubble-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow-effect': { 
          '0%, 100%': { textShadow: '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.8), hsl(var(--primary) / 1) 30%, hsl(var(--primary) / 0.7) 70%, hsl(var(--primary) / 0.9))' },
          '50%': { textShadow: '0 0 10px hsl(var(--primary)), 0 0 18px hsl(var(--primary)), 0 0 25px hsl(var(--primary))', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.9), hsl(var(--primary) / 0.7) 30%, hsl(var(--primary) / 1) 70%, hsl(var(--primary) / 0.8))' },
        },
        'loading-zoom-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(15)', opacity: '0' },
        },
        'loading-fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'star-drift-1': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translate(10px, 15px) scale(1.1)', opacity: '0.8' },
          '50%': { transform: 'translate(-15px, 5px) scale(0.9)', opacity: '1' },
          '75%': { transform: 'translate(5px, -10px) scale(1.2)', opacity: '0.6' },
        },
        'star-drift-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.6' },
          '25%': { transform: 'translate(-15px, -10px) scale(0.9)', opacity: '1' },
          '50%': { transform: 'translate(20px, -15px) scale(1.1)', opacity: '0.7' },
          '75%': { transform: 'translate(-10px, 20px) scale(1)', opacity: '0.9' },
        },
        'star-drift-3': { 
          '0%, 100%': { transform: 'translateX(0px) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateX(20px) scale(1.1)', opacity: '0.7' },
        },
        'star-drift-4': { 
          '0%, 100%': { transform: 'translateY(0px) scale(0.9)', opacity: '0.7' },
          '50%': { transform: 'translateY(-15px) scale(1)', opacity: '0.5' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'bubble-in': 'bubble-in 0.8s ease-out forwards',
        'pulse-glow-anim': 'pulse-glow-effect 2.5s infinite ease-in-out',
        'loading-zoom-out': 'loading-zoom-out 1s ease-in forwards',
        'loading-fade-out': 'loading-fade-out 0.5s ease-out forwards',
        'star-drift-1': 'star-drift-1 linear infinite',
        'star-drift-2': 'star-drift-2 linear infinite',
        'star-drift-3': 'star-drift-3 ease-in-out infinite alternate',
        'star-drift-4': 'star-drift-4 ease-in-out infinite alternate',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
