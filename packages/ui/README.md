# Orchid Design System - Skins

This package provides theme variants for the Orchid Design System components. It includes two skins: `shadcn` and `neobrutalism`.

## Installation

```bash
npm install @orchid-design-system/ui
```

## Usage

### Method 1: Using Original CSS Files (Global Styles)

Import the CSS file for the skin you want to use:

```tsx
// For shadcn skin
import '@orchid-design-system/ui/styles/shadcn.css';

// For neobrutalism skin  
import '@orchid-design-system/ui/styles/neobrutalism.css';
```

⚠️ **Warning**: Using both CSS files at the same time will cause style conflicts since they define the same CSS variables.

Then wrap your components with the appropriate theme class:

```tsx
// For shadcn components
<div className="shadcn-theme">
  <Button variant="default">Shadcn Button</Button>
</div>

// For neobrutalism components  
<div className="neobrutalism-theme">
  <Button variant="default">Neobrutalism Button</Button>
</div>
```

### Using Components

Import components from the skins package:

```tsx
import { Button, Card, Input } from '@orchid-design-system/ui'

// The component will automatically use the active skin based on the CSS loaded
<Button variant="primary">Click me</Button>
```

### Dark Mode

Both skins support dark mode. Add the `dark` class to enable it:

```tsx
// With scoped styles
<div className="shadcn-theme dark">
  <Button>Dark mode button</Button>
</div>

// With global styles
<html className="dark">
  <!-- Your app -->
</html>
```

## CSS Variables

### Shadcn Skin
Uses HSL-based color values with variables like:
- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- etc.

### Neobrutalism Skin
Uses OKLCH-based color values with variables like:
- `--background`, `--foreground`
- `--main`, `--main-foreground`
- `--secondary-background`
- Custom spacing variables: `--spacing-xs`, `--spacing-sm`, etc.

## Tailwind Configuration

The package includes a unified Tailwind configuration that supports both color systems. Make sure your project's Tailwind config extends or includes the color definitions from this package.