import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

describe('Accordion', () => {
  describe('Basic Rendering', () => {
    it('should render accordion with items', () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByText('Trigger 1')).toBeInTheDocument();
      expect(screen.getByText('Trigger 2')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      render(
        <Accordion type="single" className="custom-accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const accordion = screen.getByText('Trigger').closest('[data-slot="accordion"]');
      expect(accordion).toHaveClass('custom-accordion');
    });

    it('should render empty accordion without errors', () => {
      const { container } = render(<Accordion type="single" />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Skin Variants', () => {
    it('should render with shadcn skin', () => {
      render(
        <Accordion type="single" skin="shadcn">
          <AccordionItem value="item-1" skin="shadcn">
            <AccordionTrigger skin="shadcn">Shadcn Trigger</AccordionTrigger>
            <AccordionContent skin="shadcn">Shadcn Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByText('Shadcn Trigger')).toBeInTheDocument();
    });

    it('should render with neobrutalism skin', () => {
      render(
        <Accordion type="single" skin="neobrutalism">
          <AccordionItem value="item-1" skin="neobrutalism">
            <AccordionTrigger skin="neobrutalism">Neo Trigger</AccordionTrigger>
            <AccordionContent skin="neobrutalism">Neo Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByText('Neo Trigger')).toBeInTheDocument();
    });

    it('should default to shadcn skin when no skin is provided', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default Trigger</AccordionTrigger>
            <AccordionContent>Default Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Default Trigger');
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('Single Type Behavior', () => {
    it('should open accordion item when clicked', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger 1');
      const content = screen.getByText('Content 1');

      expect(content).not.toBeVisible();

      fireEvent.click(trigger);
      await waitFor(() => {
        expect(content).toBeVisible();
      });
    });

    it('should close other items when opening a new one in single mode', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText('Trigger 1');
      const trigger2 = screen.getByText('Trigger 2');
      const content1 = screen.getByText('Content 1');
      const content2 = screen.getByText('Content 2');

      fireEvent.click(trigger1);
      await waitFor(() => expect(content1).toBeVisible());
      expect(content2).not.toBeVisible();

      fireEvent.click(trigger2);
      await waitFor(() => expect(content2).toBeVisible());
      expect(content1).not.toBeVisible();
    });

    it('should allow closing all items when collapsible is true', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger 1');
      const content = screen.getByText('Content 1');

      fireEvent.click(trigger);
      await waitFor(() => expect(content).toBeVisible());

      fireEvent.click(trigger);
      await waitFor(() => expect(content).not.toBeVisible());
    });

    it('should not allow closing the active item when collapsible is false', async () => {
      render(
        <Accordion type="single" collapsible={false} defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger 1');
      const content = screen.getByText('Content 1');

      expect(content).toBeVisible();

      fireEvent.click(trigger);
      await waitFor(() => expect(content).toBeVisible());
    });

    it('should open defaultValue item on mount', () => {
      render(
        <Accordion type="single" defaultValue="item-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByText('Content 1')).not.toBeVisible();
      expect(screen.getByText('Content 2')).toBeVisible();
    });
  });

  describe('Multiple Type Behavior', () => {
    it('should allow multiple items to be open', async () => {
      render(
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText('Trigger 1');
      const trigger2 = screen.getByText('Trigger 2');
      const content1 = screen.getByText('Content 1');
      const content2 = screen.getByText('Content 2');

      fireEvent.click(trigger1);
      await waitFor(() => expect(content1).toBeVisible());

      fireEvent.click(trigger2);
      await waitFor(() => {
        expect(content1).toBeVisible();
        expect(content2).toBeVisible();
      });
    });

    it('should toggle items independently in multiple mode', async () => {
      render(
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger 1');
      const content = screen.getByText('Content 1');

      fireEvent.click(trigger);
      await waitFor(() => expect(content).toBeVisible());

      fireEvent.click(trigger);
      await waitFor(() => expect(content).not.toBeVisible());
    });

    it('should open multiple defaultValue items on mount', () => {
      render(
        <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Trigger 3</AccordionTrigger>
            <AccordionContent>Content 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByText('Content 1')).toBeVisible();
      expect(screen.getByText('Content 2')).not.toBeVisible();
      expect(screen.getByText('Content 3')).toBeVisible();
    });
  });

  describe('Controlled State', () => {
    it('should work as controlled component with value prop', async () => {
      const ControlledAccordion = () => {
        const [value, setValue] = React.useState<string | undefined>('item-1');

        return (
          <>
            <button onClick={() => setValue('item-2')}>Open Item 2</button>
            <button onClick={() => setValue(undefined)}>Close All</button>
            <Accordion type="single" collapsible value={value} onValueChange={setValue}>
              <AccordionItem value="item-1">
                <AccordionTrigger>Trigger 1</AccordionTrigger>
                <AccordionContent>Content 1</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Trigger 2</AccordionTrigger>
                <AccordionContent>Content 2</AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        );
      };

      render(<ControlledAccordion />);

      expect(screen.getByText('Content 1')).toBeVisible();
      expect(screen.getByText('Content 2')).not.toBeVisible();

      fireEvent.click(screen.getByText('Open Item 2'));
      await waitFor(() => {
        expect(screen.getByText('Content 1')).not.toBeVisible();
        expect(screen.getByText('Content 2')).toBeVisible();
      });

      fireEvent.click(screen.getByText('Close All'));
      await waitFor(() => {
        expect(screen.getByText('Content 1')).not.toBeVisible();
        expect(screen.getByText('Content 2')).not.toBeVisible();
      });
    });

    it('should call onValueChange when value changes', async () => {
      const onValueChange = vi.fn();

      render(
        <Accordion type="single" collapsible onValueChange={onValueChange}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      fireEvent.click(screen.getByText('Trigger 1'));
      await waitFor(() => {
        expect(onValueChange).toHaveBeenCalledWith('item-1');
      });
    });
  });

  describe('Disabled State', () => {
    it('should not open disabled accordion items', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Disabled Trigger</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Disabled Trigger');
      const content = screen.getByText('Content 1');

      expect(trigger).toBeDisabled();
      expect(content).not.toBeVisible();

      fireEvent.click(trigger);
      await waitFor(() => expect(content).not.toBeVisible());
    });

    it('should apply disabled styles to disabled triggers', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Disabled Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Disabled Trigger');
      expect(trigger).toHaveAttribute('disabled');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(trigger);
      waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should be keyboard navigable', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText('Trigger 1');
      const trigger2 = screen.getByText('Trigger 2');

      trigger1.focus();
      expect(document.activeElement).toBe(trigger1);

      fireEvent.keyDown(trigger1, { key: 'ArrowDown' });
      await waitFor(() => expect(document.activeElement).toBe(trigger2));

      fireEvent.keyDown(trigger2, { key: 'ArrowUp' });
      await waitFor(() => expect(document.activeElement).toBe(trigger1));
    });

    it('should activate item with Enter key', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger');
      const content = screen.getByText('Content');

      trigger.focus();
      fireEvent.keyDown(trigger, { key: 'Enter' });
      await waitFor(() => expect(content).toBeVisible());
    });

    it('should activate item with Space key', async () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Trigger');
      const content = screen.getByText('Content');

      trigger.focus();
      fireEvent.keyDown(trigger, { key: ' ' });
      await waitFor(() => expect(content).toBeVisible());
    });
  });

  describe('Custom Content', () => {
    it('should render custom trigger content', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div data-testid="custom-trigger">
                <span>Icon</span>
                <span>Custom Trigger</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(screen.getByTestId('custom-trigger')).toBeInTheDocument();
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Custom Trigger')).toBeInTheDocument();
    });

    it('should render custom content', () => {
      render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>
              <div data-testid="custom-content">
                <h4>Title</h4>
                <p>Description</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      fireEvent.click(screen.getByText('Trigger'));
      waitFor(() => {
        expect(screen.getByTestId('custom-content')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle single item accordion', () => {
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Only Item</AccordionTrigger>
            <AccordionContent>Only Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText('Only Item');
      const content = screen.getByText('Only Content');

      fireEvent.click(trigger);
      waitFor(() => expect(content).toBeVisible());

      fireEvent.click(trigger);
      waitFor(() => expect(content).not.toBeVisible());
    });

    it('should handle accordion with custom classNames on all parts', () => {
      render(
        <Accordion type="single" className="accordion-custom">
          <AccordionItem value="item-1" className="item-custom">
            <AccordionTrigger className="trigger-custom">Trigger</AccordionTrigger>
            <AccordionContent className="content-custom">Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const accordion = screen.getByText('Trigger').closest('[data-slot="accordion"]');
      const item = screen.getByText('Trigger').closest('[data-slot="accordion-item"]');
      const trigger = screen.getByText('Trigger').closest('[data-slot="accordion-trigger"]');
      const content = screen.getByText('Content').closest('[data-slot="accordion-content"]');

      expect(accordion).toHaveClass('accordion-custom');
      expect(item).toHaveClass('item-custom');
      expect(trigger).toHaveClass('trigger-custom');
      expect(content).toHaveClass('content-custom');
    });
  });

  describe('Snapshot Tests', () => {
    it('should match snapshot for default accordion', () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetic.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for shadcn skin', () => {
      const { container } = render(
        <Accordion type="single" skin="shadcn" collapsible>
          <AccordionItem value="item-1" skin="shadcn">
            <AccordionTrigger skin="shadcn">Shadcn Trigger</AccordionTrigger>
            <AccordionContent skin="shadcn">Shadcn Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for neobrutalism skin', () => {
      const { container } = render(
        <Accordion type="single" skin="neobrutalism" collapsible>
          <AccordionItem value="item-1" skin="neobrutalism">
            <AccordionTrigger skin="neobrutalism">Neobrutalism Trigger</AccordionTrigger>
            <AccordionContent skin="neobrutalism">Neobrutalism Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for multiple type', () => {
      const { container } = render(
        <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Item 3</AccordionTrigger>
            <AccordionContent>Content 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for disabled state', () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Disabled Trigger</AccordionTrigger>
            <AccordionContent>Disabled Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Enabled Trigger</AccordionTrigger>
            <AccordionContent>Enabled Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for custom content', () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <span>🎨</span>
                <span>Custom trigger</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <h4 className="font-semibold">Custom Content</h4>
                <ul className="list-disc pl-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for empty accordion', () => {
      const { container } = render(
        <Accordion type="single" collapsible />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with custom classNames', () => {
      const { container } = render(
        <Accordion type="single" className="custom-accordion" collapsible>
          <AccordionItem value="item-1" className="custom-item">
            <AccordionTrigger className="custom-trigger">Custom styled trigger</AccordionTrigger>
            <AccordionContent className="custom-content">Custom styled content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for single non-collapsible accordion', () => {
      const { container } = render(
        <Accordion type="single" collapsible={false} defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Always open item</AccordionTrigger>
            <AccordionContent>This item cannot be closed</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Alternative item</AccordionTrigger>
            <AccordionContent>Click to switch to this item</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot for long content', () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Long content example</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container).toMatchSnapshot();
    });
  });
});