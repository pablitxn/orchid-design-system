/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Common color mappings that work with both ui
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        
        // Shadcn-specific colors (using RGB)
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
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
        // Neobrutalism shadow spacing
        boxShadowX: "var(--spacing-boxShadowX, 4px)",
        boxShadowY: "var(--spacing-boxShadowY, 4px)",
        reverseBoxShadowX: "var(--spacing-reverseBoxShadowX, -4px)",
        reverseBoxShadowY: "var(--spacing-reverseBoxShadowY, -4px)",
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
        shadow: "var(--shadow, 4px 4px 0px 0px var(--border))",
        none: "none",
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
        base: "var(--font-weight-base, 500)",
        heading: "var(--font-weight-heading, 700)",
      },
      transitionDuration: {
        base: "var(--animate-duration, 250ms)",
      },
    },
  },
  plugins: [],
};