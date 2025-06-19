// NOTE: CSS files should be imported by the consumer based on the skin they want to use
// This prevents style conflicts between different ui
// Example usage:
// import '@orchid/ui/styles/shadcn.css' // for shadcn skin
// import '@orchid/ui/styles/neobrutalism.css' // for neobrutalism skin

// Export all components
export * from './components/ui/accordion';
export * from './components/ui/alert-dialog';
export * from './components/ui/alert';
export * from './components/ui/avatar';
export * from './components/ui/badge';
export * from './components/ui/breadcrumb';
export * from './components/ui/button';
export * from './components/ui/card';
export * from './components/ui/chat';
export * from './components/ui/dialog';
export * from './components/ui/dropdown-menu';
export * from './components/ui/input';
export * from './components/ui/label';
export * from './components/ui/progress';
export * from './components/ui/radio-group';
export * from './components/ui/scroll-area';
export * from './components/ui/select';
export * from './components/ui/skeleton';
export * from './components/ui/slider';
export * from './components/ui/switch';
export * from './components/ui/table';
export * from './components/ui/tabs';
export * from './components/ui/textarea';
export * from './components/ui/tooltip';

// Export utilities
export { cn } from './lib/utils';
export type { SkinType, WithSkinProps } from './lib/utils';
export { SKINS, DEFAULT_SKIN } from './lib/constants';