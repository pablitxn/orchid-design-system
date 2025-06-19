import * as React from 'react';
import * as ShadcnChat from './shadcn';
import * as NeobrutalismChat from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants';
import type { WithSkinProps } from '../../../lib/utils';

const chatVariants = {
  [SKINS.SHADCN]: ShadcnChat,
  [SKINS.NEOBRUTALISM]: NeobrutalismChat,
} as const;

export type ChatProps = React.ComponentProps<typeof ShadcnChat.Chat> & WithSkinProps;
export type ChatMessageProps = React.ComponentProps<typeof ShadcnChat.ChatMessage> & WithSkinProps;
export type ChatInputProps = React.ComponentProps<typeof ShadcnChat.ChatInput> & WithSkinProps;

export const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    const components = getSkinComponent(chatVariants, skin);
    return <components.Chat ref={ref} {...props} />;
  }
);

export const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    const components = getSkinComponent(chatVariants, skin);
    return <components.ChatMessage ref={ref} {...props} />;
  }
);

export const ChatInput = React.forwardRef<HTMLDivElement, ChatInputProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    const components = getSkinComponent(chatVariants, skin);
    return <components.ChatInput ref={ref} {...props} />;
  }
);

Chat.displayName = 'Chat';
ChatMessage.displayName = 'ChatMessage';
ChatInput.displayName = 'ChatInput';