import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
// @ts-ignore
import React from 'react';

afterEach(() => {
  cleanup();
});

// Provide a default i18n mock for components using react-i18next
vi.mock('react-i18next', () => {
  const i18n = { language: 'en', changeLanguage: vi.fn() };
  return {
    useTranslation: () => ({ t: (key: string) => key, i18n }),
    Trans: ({ i18nKey, children }: { i18nKey: string; children?: React.ReactNode }) =>
      React.createElement('span', null, children ?? i18nKey),
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  };
});

// Mock ResizeObserver for components relying on element size calculations
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverStub,
});


// Mock matchMedia for JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Polyfill ResizeObserver for components relying on it
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = ResizeObserver;
