# 🌸 Orchid Design System

A modern, accessible, and themeable design system built with React, Radix UI, and Tailwind CSS. Features multiple visual styles including **Shadcn** and **Neobrutalism** skins that can be dynamically switched while maintaining the same component API.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Accessible-7C3AED)

## ✨ Features

- 🎨 **Multiple Theme Variants**: Switch between Shadcn and Neobrutalism skins dynamically
- ♿ **Accessibility First**: Built on Radix UI primitives with ARIA best practices
- 🚀 **Modern Stack**: React 18, TypeScript, Tailwind CSS v4, and Vite
- 📦 **Monorepo Architecture**: Organized packages with Turbo for optimal builds
- 🧪 **Comprehensive Testing**: Vitest with 80% coverage threshold
- 📚 **Interactive Documentation**: Storybook v9 with all component variants
- 🌙 **Dark Mode Support**: Both skins support light and dark themes
- 🎯 **Type Safe**: Full TypeScript support with strict configurations
- 🌳 **Tree Shakeable**: Optimized bundle sizes with ESM exports

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/orchid-labs-xyz/orchid-design-system.git

# Install dependencies
npm install

# Start development (all packages)
npm run dev

# Start Storybook documentation
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to explore components interactively.

## 📦 Packages

This monorepo contains the following packages:

| Package | Description | Version |
|---------|-------------|---------|
| **@orchid-design-system/ui** | Main UI components with theme variants | ![npm](https://img.shields.io/npm/v/@orchid-design-system/ui) |
| **@orchid-design-system/primitives** | Core Radix UI primitive components | ![npm](https://img.shields.io/npm/v/@orchid-design-system/primitives) |
| **@orchid-design-system/docs** | Documentation app with Storybook | Internal |

## 🎨 Theme/Skin System

One of the most powerful features is the ability to switch between different visual styles (skins) while maintaining the same component API:

### Available Skins

| Skin | Description | Color System |
|------|-------------|--------------|
| **Shadcn** | Clean, modern design following shadcn/ui patterns | HSL-based |
| **Neobrutalism** | Bold, high-contrast design with distinctive shadows | OKLCH-based |

### How It Works

Each component exports both theme variants and uses a `skin` prop to determine which variant to render:

```tsx
import { Button } from '@orchid-design-system/ui';

// Shadcn skin (default)
<Button>Click me</Button>

// Neobrutalism skin
<Button skin="neobrutalism">Click me</Button>
```

## 📖 Installation & Usage

### Installation

```bash
npm install @orchid-design-system/ui
```

### Basic Setup

1. **Import the styles for your chosen skin:**

```tsx
// For Shadcn skin
import '@orchid-design-system/ui/styles/shadcn.css';

// For Neobrutalism skin
import '@orchid-design-system/ui/styles/neobrutalism.css';

// Or import all styles
import '@orchid-design-system/ui/styles.css';
```

2. **Use components in your application:**

```tsx
import { Button, Card, Alert } from '@orchid-design-system/ui';

function App() {
  return (
    <Card>
      <Alert>Welcome to Orchid Design System!</Alert>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### Dynamic Skin Switching

You can dynamically switch between skins at runtime:

```tsx
import { useState } from 'react';
import { Button, Card } from '@orchid-design-system/ui';
import { SKINS } from '@orchid-design-system/ui/constants';

function App() {
  const [currentSkin, setCurrentSkin] = useState(SKINS.SHADCN);

  return (
    <div>
      <Card skin={currentSkin}>
        <Button 
          skin={currentSkin}
          onClick={() => setCurrentSkin(
            currentSkin === SKINS.SHADCN 
              ? SKINS.NEOBRUTALISM 
              : SKINS.SHADCN
          )}
        >
          Switch Theme
        </Button>
      </Card>
    </div>
  );
}
```

### Dark Mode

Both skins support dark mode. Simply add the `dark` class to your root element:

```html
<html class="dark">
  <!-- Your app -->
</html>
```

## 🧩 Available Components

All components are available in both Shadcn and Neobrutalism skins:

### Core Components
- **Accordion** - Collapsible content panels
- **Alert** - Feedback messages and notifications
- **Alert Dialog** - Modal dialogs for important messages
- **Avatar** - User profile images with fallbacks
- **Badge** - Small status indicators
- **Breadcrumb** - Navigation path indicators
- **Button** - Interactive buttons with variants
- **Card** - Content containers with various layouts

### Form Components
- **Checkbox** - Toggle binary choices
- **Input** - Text input fields
- **Label** - Form field labels
- **Radio Group** - Single selection from options
- **Select** - Dropdown selection menus
- **Slider** - Numeric range selection
- **Switch** - Toggle switches
- **Textarea** - Multi-line text input

### Layout & Navigation
- **Dialog** - Modal overlays
- **Dropdown Menu** - Contextual action menus
- **Progress** - Progress indicators
- **Scroll Area** - Custom scrollable regions
- **Skeleton** - Loading state placeholders
- **Table** - Data tables with sorting
- **Tabs** - Tabbed content organization
- **Tooltip** - Contextual information on hover

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Commands

```bash
# Development
npm run dev              # Start all dev servers
npm run storybook       # Start Storybook (port 6006)

# Building
npm run build           # Build all packages
npm run build:css       # Build CSS files

# Testing
npm test                # Run tests
npm run test:coverage   # Run tests with coverage report
npm run lint           # Lint all packages
npm run type-check     # Type check all packages

# Release Management
npm run changeset       # Create a changeset for versioning
npm run version-packages # Update package versions
npm run release        # Build and publish to npm
```

### Project Structure

```
orchid-design-system/
├── apps/
│   └── docs/                    # Storybook documentation
├── packages/
│   ├── primitives/              # Radix UI primitives
│   └── ui/                      # Theme variants
│       ├── src/
│       │   ├── components/      # Component implementations
│       │   │   └── button/
│       │   │       ├── index.tsx         # Base with skin switching
│       │   │       ├── shadcn/           # Shadcn variant
│       │   │       └── neobrutalism/     # Neobrutalism variant
│       │   └── styles/          # Theme CSS files
│       └── tests/               # Test suites
├── turbo.json                   # Turbo configuration
└── package.json                 # Root package.json
```

### Component Development

When creating a new component:

1. Create the component structure following the pattern
2. Implement both skin variants
3. Add the skin switching logic in the base component
4. Write tests with at least 80% coverage
5. Create Storybook stories
6. Update the component exports

Example component structure:
```tsx
// Base component with skin switching
const componentVariants = {
  [SKINS.SHADCN]: ShadcnComponent,
  [SKINS.NEOBRUTALISM]: NeobrutalismComponent,
} as const;

export const Component = React.forwardRef(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const components = getSkinComponent(componentVariants, skin);
  return <components.Component ref={ref} {...props} />;
});
```

## 🧪 Testing

The design system uses Vitest with the following test organization:

```
tests/
├── a11y/        # Accessibility tests
├── integration/ # Integration tests
└── visual/      # Visual regression tests
```

Run tests with:
```bash
npm test                 # Run all tests
npm run test:coverage   # With coverage report (80% threshold)
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure they pass
5. Create a changeset (`npm run changeset`)
6. Commit your changes
7. Push to your branch
8. Open a Pull Request

### Commit Convention

We follow conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Maintenance tasks

## 📄 License

MIT © [Orchid Labs](https://github.com/orchid-labs-xyz)

## 🔗 Links

- [GitHub Repository](https://github.com/orchid-labs-xyz/orchid-design-system)
- [Storybook Documentation](http://localhost:6006) (when running locally)
- [Design System Documentation](https://orchid-design-system-docs.vercel.app/)
- [Design System Demo App](https://orchid-design-system-docs-demo-app.vercel.app/)
- [NPM Package](https://www.npmjs.com/package/@orchid-design-system/ui)

---

Built with 💜 