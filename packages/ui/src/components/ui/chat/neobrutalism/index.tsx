import * as React from 'react';
import { cn } from '../../../../lib/utils';
import { ScrollArea } from '../../scroll-area';
import { Input } from '../../input';
import { Button } from '../../button';
import { Avatar, AvatarFallback, AvatarImage } from '../../avatar';
import { SKINS } from '../../../../lib/constants';

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
          'flex h-full w-full flex-col rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
          className
        )}
        {...props}
      >
        <ScrollArea className="flex-1 p-4" skin={SKINS.NEOBRUTALISM}>
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
        <Avatar className="h-10 w-10 border-2 border-black" skin={SKINS.NEOBRUTALISM}>
          <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
          <AvatarFallback skin={SKINS.NEOBRUTALISM}>
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
            <span className="text-sm font-bold">{message.sender.name}</span>
            {message.timestamp && (
              <span className="text-xs font-medium">
                {new Date(message.timestamp).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            )}
          </div>
          <div
            className={cn(
              'rounded-none border-2 border-black px-4 py-2 text-sm font-medium',
              isCurrentUser
                ? 'bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-blue-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
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
        className={cn('flex gap-2 border-t-4 border-black bg-gray-100 p-4', className)}
        {...props}
      >
        <Input
          skin={SKINS.NEOBRUTALISM}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1 border-2 border-black font-medium"
        />
        <Button
          skin={SKINS.NEOBRUTALISM}
          onClick={handleSend}
          disabled={!message.trim()}
          size="default"
          className="min-w-[80px] font-bold"
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