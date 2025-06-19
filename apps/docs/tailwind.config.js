import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/*/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/components/**/*.stories.{js,jsx,ts,tsx}",
    "../../packages/ui/src/assets/styles/*.css",
    "./.docs/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        
        // Neobrutalism-specific colors (using custom properties)
        main: {
          DEFAULT: "var(--main)",
          foreground: "var(--main-foreground)",
        },
        "secondary-background": "var(--secondary-background)",
        overlay: "var(--overlay)",
        
        // Chart colors (common to both)
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
          "active-dot": "var(--chart-active-dot)",
        },
      },
      spacing: {
        // Neobrutalism custom spacing
        xs: "var(--spacing-xs, 4px)",
        sm: "var(--spacing-sm, 8px)",
        md: "var(--spacing-md, 16px)",
        lg: "var(--spacing-lg, 24px)",
        xl: "var(--spacing-xl, 32px)",
        base: "var(--spacing-base, 4px)",
        "m-xs": "var(--spacing-m-xs, -4px)",
        "m-sm": "var(--spacing-m-sm, -8px)",
        "m-md": "var(--spacing-m-md, -16px)",
        "m-lg": "var(--spacing-m-lg, -24px)",
        "m-xl": "var(--spacing-m-xl, -32px)",
      },
      borderRadius: {
        // Support both radius systems
        lg: "var(--radius, var(--radius-lg, 0.5rem))",
        md: "var(--radius-md, calc(var(--radius, 0.5rem) - 2px))",
        sm: "var(--radius-sm, calc(var(--radius, 0.5rem) - 4px))",
        xl: "var(--radius-xl, 0.75rem)",
        base: "var(--radius-base, 0.25rem)",
      },
      boxShadow: {
        // Neobrutalism shadow
        neo: "var(--shadow, 4px 4px 0px 0px var(--border))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontWeight: {
        base: "var(--font-weight-normal, 400)",
      },
      transitionDuration: {
        base: "var(--animate-duration, 250ms)",
      },
    },
  },
  plugins: [],
};