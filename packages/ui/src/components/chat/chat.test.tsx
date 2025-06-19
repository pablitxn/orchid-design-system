import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chat, ChatMessage, ChatInput } from './index.tsx';
import { SKINS } from '../../lib/constants.ts';

describe('Chat Component', () => {
  const mockMessages = [
    {
      id: 1,
      content: 'Hello!',
      sender: {
        name: 'John Doe',
        avatar: 'https://example.com/avatar1.jpg',
        isCurrentUser: false,
      },
      timestamp: new Date('2024-01-01T10:00:00'),
    },
    {
      id: 2,
      content: 'Hi there!',
      sender: {
        name: 'Jane Smith',
        avatar: 'https://example.com/avatar2.jpg',
        isCurrentUser: true,
      },
      timestamp: new Date('2024-01-01T10:01:00'),
    },
  ];

  describe('Chat', () => {
    it('renders with default skin', () => {
      render(<Chat messages={mockMessages} />);
      expect(screen.getByText('Hello!')).toBeInTheDocument();
      expect(screen.getByText('Hi there!')).toBeInTheDocument();
    });

    it('renders with shadcn skin', () => {
      render(<Chat skin={SKINS.SHADCN} messages={mockMessages} />);
      expect(screen.getByText('Hello!')).toBeInTheDocument();
    });

    it('renders with neobrutalism skin', () => {
      render(<Chat skin={SKINS.NEOBRUTALISM} messages={mockMessages} />);
      expect(screen.getByText('Hello!')).toBeInTheDocument();
    });

    it('calls onSendMessage when message is sent', () => {
      const onSendMessage = vi.fn();
      render(<Chat onSendMessage={onSendMessage} />);
      
      const input = screen.getByPlaceholderText('Type a message...');
      const button = screen.getByText('Send');
      
      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.click(button);
      
      expect(onSendMessage).toHaveBeenCalledWith('Test message');
    });
  });

  describe('ChatMessage', () => {
    it('renders message content correctly', () => {
      render(<ChatMessage message={mockMessages[0]} />);
      expect(screen.getByText('Hello!')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders timestamp when provided', () => {
      render(<ChatMessage message={mockMessages[0]} />);
      expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    });

    it('renders avatar fallback when no avatar provided', () => {
      const messageWithoutAvatar = {
        ...mockMessages[0],
        sender: { ...mockMessages[0].sender, avatar: undefined },
      };
      render(<ChatMessage message={messageWithoutAvatar} />);
      expect(screen.getByText('JO')).toBeInTheDocument();
    });
  });

  describe('ChatInput', () => {
    it('renders with default placeholder', () => {
      render(<ChatInput />);
      expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument();
    });

    it('renders with custom placeholder', () => {
      render(<ChatInput placeholder="Write something..." />);
      expect(screen.getByPlaceholderText('Write something...')).toBeInTheDocument();
    });

    it('renders with custom button text', () => {
      render(<ChatInput sendButtonText="Submit" />);
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('clears input after sending message', () => {
      const onSendMessage = vi.fn();
      render(<ChatInput onSendMessage={onSendMessage} />);
      
      const input = screen.getByPlaceholderText('Type a message...') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Test' } });
      fireEvent.click(screen.getByText('Send'));
      
      expect(input.value).toBe('');
    });

    it('sends message on Enter key', () => {
      const onSendMessage = vi.fn();
      render(<ChatInput onSendMessage={onSendMessage} />);
      
      const input = screen.getByPlaceholderText('Type a message...');
      fireEvent.change(input, { target: { value: 'Test' } });
      fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
      
      expect(onSendMessage).toHaveBeenCalledWith('Test');
    });

    it('does not send empty messages', () => {
      const onSendMessage = vi.fn();
      render(<ChatInput onSendMessage={onSendMessage} />);
      
      const button = screen.getByText('Send');
      fireEvent.click(button);
      
      expect(onSendMessage).not.toHaveBeenCalled();
    });
  });
});