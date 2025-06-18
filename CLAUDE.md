# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development servers for all packages
- `npm run storybook` - Start Storybook on port 6006 (from apps/storybook)
- `npm run build` - Build all packages using Turbo
- `npm run lint` - Run linting across all packages  
- `npm run type-check` - Type check all TypeScript code

### Testing
- `npm test` - Run tests (when configured)
- Tests are organized in `/tests` directory:
  - `/tests/a11y` - Accessibility tests
  - `/tests/integration` - Integration tests
  - `/tests/visual` - Visual regression tests

### Release Management
- `npm run changeset` - Create a new changeset for versioning
- `npm run version-packages` - Update package versions based on changesets
- `npm run release` - Build and publish packages to npm

## Architecture

This is a **monorepo design system** built with:
- **Turbo** for monorepo orchestration
- **npm workspaces** for package management
- **TypeScript** for type safety
- **React** as the UI framework
- **Radix UI** for accessible component primitives
- **Tailwind CSS** with CVA for styling
- **Storybook v9** for component documentation

### Package Structure

```
packages/
├── ui-core/          # Core Radix UI primitive components
├── skins/            # Theme variants (shadcn & neobrutalism)
└── components/       # Additional custom components

apps/
└── storybook/        # Storybook application (port 6006)
```

### Component Organization

Each component follows this structure:
```
component-name/
├── index.tsx              # Base component implementation
├── shadcn/               
│   └── index.tsx         # Shadcn theme variant
├── neobrutalism/
│   └── index.tsx         # Neobrutalism theme variant
├── component-name.stories.tsx  # Storybook stories
└── component-name.test.tsx     # Component tests
```

### Key Patterns

1. **Radix UI Integration**: Components are built on Radix primitives for accessibility
2. **CVA for Variants**: Use class-variance-authority for managing component variants
3. **Theme Variants**: Each component has theme-specific implementations
4. **Composition**: Components use the `asChild` pattern for flexible composition
5. **Utilities**: Use `cn()` utility (from lib/utils) for className merging

### Development Workflow

1. Components are developed in `packages/skins/[skin-name]/src/components/`
2. Each component exports both shadcn and neobrutalism variants
3. Stories are written alongside components for Storybook documentation
4. Changes are tracked using changesets for proper versioning

## Key Files and Utilities

- `packages/skins/neobrutalism/src/lib/utils.ts` - Contains `cn()` utility for className merging
- `packages/skins/neobrutalism/src/lib/getSkinComponent.tsx` - Helper for dynamic theme selection
- `turbo.json` - Defines build pipeline and task dependencies
- Each package has its own `tsconfig.json` extending the root configuration