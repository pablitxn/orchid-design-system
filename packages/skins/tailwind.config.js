/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Common color mappings that work with both skins
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        
        // Shadcn-specific colors (using HSL)
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
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