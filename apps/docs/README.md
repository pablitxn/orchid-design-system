# Orchid Design System - Documentation

This app hosts the Storybook documentation for the Orchid Design System.

## Overview

This is the main documentation site showcasing all components in the design system with interactive examples and multiple theme variants.

## Getting Started

From the monorepo root:

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

The Storybook will be available at http://localhost:6006

## Features

- Interactive component playground
- Live theme switching between Shadcn and Neobrutalism variants
- Component API documentation
- Accessibility testing integration
- Visual regression testing support

## Structure

```
src/
├── stories/           # Component stories
│   ├── components/   # Custom component stories
│   ├── primitives/   # Radix UI primitive stories
│   └── ui/          # UI component stories
├── App.tsx          # Main app component
├── SkinDemo.tsx     # Theme switching demo
└── lib/            # Utilities
```

## Development

Stories follow the Component Story Format (CSF) 3.0 and are colocated with their components:

```typescript
// Example: button.stories.tsx
export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Click me',
  },
};
```

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build