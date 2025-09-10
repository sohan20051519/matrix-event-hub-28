import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Matrix Theme Colors
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        cosmic: {
          red: "hsl(var(--cosmic-red))",
          "red-light": "hsl(var(--cosmic-red-light))",
          blue: "hsl(var(--space-blue))",
          "blue-dark": "hsl(var(--space-blue-dark))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "var(--glow-gold)" },
          "50%": { boxShadow: "var(--glow-red)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "reveal-up": {
          "0%": { 
            transform: "translateY(60px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        "reveal-up-sm": {
          "0%": { 
            transform: "translateY(30px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        "reveal-up-lg": {
          "0%": { 
            transform: "translateY(100px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "hsl(var(--gold))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "matrix-rain": "matrix-rain 4s linear infinite",
        "scroll-left": "scroll-left 20s linear infinite",
        "reveal-up": "reveal-up 0.2s ease-in forwards",
        "reveal-up-sm": "reveal-up-sm 0.2s ease-in forwards",
        "reveal-up-lg": "reveal-up-lg 0.2s ease-in forwards",
        "typewriter": "typewriter 3s steps(12, end) forwards",
        "blink": "blink 1s infinite",
      },
      backgroundImage: {
        "gradient-cosmic": "var(--gradient-cosmic)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-glass": "var(--gradient-glass)",
      },
      boxShadow: {
        "cosmic": "var(--shadow-cosmic)",
        "glow-gold": "var(--glow-gold)",
        "glow-red": "var(--glow-red)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
