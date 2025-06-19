import * as React from 'react';
import { cn } from '../../../lib/utils.ts';
import { ScrollArea } from '../../ui/scroll-area';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { SKINS } from '../../../lib/constants.ts';

export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: Message[];
  onSendMessage?: (message: string) => void;
  placeholder?: string;
  sendButtonText?: string;
}

export interface Message {
  id: string | number;
  content: string;
  sender: {
    name: string;
    avatar?: string;
    isCurrentUser?: boolean;
  };
  timestamp?: Date | string;
}

export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: Message;
}

export interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
  sendButtonText?: string;
}

export const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  ({ className, messages = [], onSendMessage, placeholder, sendButtonText, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex h-full w-full flex-col rounded-lg border bg-background',
          className
        )}
        {...props}
      >
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>
        <ChatInput
          onSendMessage={onSendMessage}
          placeholder={placeholder}
          sendButtonText={sendButtonText}
        />
      </div>
    );
  }
);

export const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ className, message, ...props }, ref) => {
    const isCurrentUser = message.sender.isCurrentUser;
    
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-3',
          isCurrentUser && 'flex-row-reverse',
          className
        )}
        {...props}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
          <AvatarFallback skin={SKINS.SHADCN}>
            {message.sender.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div
          className={cn(
            'flex max-w-[70%] flex-col gap-1',
            isCurrentUser && 'items-end'
          )}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{message.sender.name}</span>
            {message.timestamp && (
              <span className="text-xs text-muted-foreground">
                {new Date(message.timestamp).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            )}
          </div>
          <div
            className={cn(
              'rounded-lg px-3 py-2 text-sm',
              isCurrentUser
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted'
            )}
          >
            {message.content}
          </div>
        </div>
      </div>
    );
  }
);

export const ChatInput = React.forwardRef<HTMLDivElement, ChatInputProps>(
  ({ className, onSendMessage, placeholder = 'Type a message...', sendButtonText = 'Send', ...props }, ref) => {
    const [message, setMessage] = React.useState('');

    const handleSend = () => {
      if (message.trim() && onSendMessage) {
        onSendMessage(message.trim());
        setMessage('');
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <div
        ref={ref}
        className={cn('flex gap-2 border-t p-4', className)}
        {...props}
      >
        <Input
          skin={SKINS.SHADCN}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1"
        />
        <Button
          skin={SKINS.SHADCN}
          onClick={handleSend}
          disabled={!message.trim()}
          size="default"
        >
          {sendButtonText}
        </Button>
      </div>
    );
  }
);

Chat.displayName = 'Chat';
ChatMessage.displayName = 'ChatMessage';
ChatInput.displayName = 'ChatInput';