import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Chat, SKINS } from '@orchid-design-system/ui';

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    skin: {
      control: 'radio',
      options: ['shadcn', 'neobrutalism'],
      description: 'Visual theme variant',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    sendButtonText: {
      control: 'text',
      description: 'Text for the send button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockMessages = [
  {
    id: 1,
    content: 'Hey there! Welcome to our chat component.',
    sender: {
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      isCurrentUser: false,
    },
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: 2,
    content: 'Thanks! This looks great. I love how it supports multiple themes.',
    sender: {
      name: 'You',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      isCurrentUser: true,
    },
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    id: 3,
    content: 'Yes! You can switch between shadcn and neobrutalism themes. Try it out!',
    sender: {
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      isCurrentUser: false,
    },
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
  },
  {
    id: 4,
    content: 'That\'s awesome. The neobrutalism style is really bold and eye-catching.',
    sender: {
      name: 'You',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      isCurrentUser: true,
    },
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
  },
];

const ChatWrapper = ({ skin = SKINS.SHADCN, ...props }: any) => {
  const [messages, setMessages] = React.useState(props.messages || mockMessages);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now(),
      content,
      sender: {
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
        isCurrentUser: true,
      },
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    // Simulate a response after 1 second
    setTimeout(() => {
      const responseMessage = {
        id: Date.now() + 1,
        content: `Got your message: "${content}". This is an automated response!`,
        sender: {
          name: 'Alex Chen',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
          isCurrentUser: false,
        },
        timestamp: new Date(),
      };
      setMessages((prev: any) => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <div style={{ width: '450px', height: '600px' }}>
      <Chat
        {...props}
        skin={skin}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ChatWrapper {...args} />,
  args: {
    skin: SKINS.SHADCN,
    placeholder: 'Type a message...',
    sendButtonText: 'Send',
  },
};

export const Neobrutalism: Story = {
  render: (args) => <ChatWrapper {...args} />,
  args: {
    skin: SKINS.NEOBRUTALISM,
    placeholder: 'Type something bold...',
    sendButtonText: 'Send',
  },
};

export const BothSkins: Story = {
  render: (args) => {
    const [messages, setMessages] = React.useState(mockMessages);

    const handleSendMessage = (content: string) => {
      const newMessage = {
        id: Date.now(),
        content,
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
          isCurrentUser: true,
        },
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
    };

    return (
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Shadcn Theme</h3>
          <div style={{ width: '400px', height: '500px' }}>
            <Chat
              skin={SKINS.SHADCN}
              messages={messages}
              onSendMessage={handleSendMessage}
              placeholder="Type a message..."
              sendButtonText="Send"
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Neobrutalism Theme</h3>
          <div style={{ width: '400px', height: '500px' }}>
            <Chat
              skin={SKINS.NEOBRUTALISM}
              messages={messages}
              onSendMessage={handleSendMessage}
              placeholder="Type something bold..."
              sendButtonText="Send"
            />
          </div>
        </div>
      </div>
    );
  },
};

export const EmptyChat: Story = {
  render: (args) => <ChatWrapper {...args} messages={[]} />,
  args: {
    skin: SKINS.SHADCN,
    placeholder: 'Start a conversation...',
    sendButtonText: 'Send Message',
  },
};

export const LongConversation: Story = {
  render: (args) => {
    const longMessages = [
      ...mockMessages,
      {
        id: 5,
        content: 'I wanted to discuss the new features we\'re planning for the next release.',
        sender: {
          name: 'Sarah Kim',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          isCurrentUser: false,
        },
        timestamp: new Date(Date.now() - 4 * 60 * 1000),
      },
      {
        id: 6,
        content: 'Sure! What features are you thinking about?',
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
          isCurrentUser: true,
        },
        timestamp: new Date(Date.now() - 3 * 60 * 1000),
      },
      {
        id: 7,
        content: 'We\'re considering adding voice messages, file attachments, and message reactions.',
        sender: {
          name: 'Sarah Kim',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          isCurrentUser: false,
        },
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
      },
      {
        id: 8,
        content: 'Those sound great! Voice messages would be particularly useful for quick updates.',
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
          isCurrentUser: true,
        },
        timestamp: new Date(Date.now() - 90 * 1000),
      },
      {
        id: 9,
        content: 'Exactly! And with file attachments, users could share documents and images easily.',
        sender: {
          name: 'Sarah Kim',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          isCurrentUser: false,
        },
        timestamp: new Date(Date.now() - 60 * 1000),
      },
      {
        id: 10,
        content: 'Let\'s prioritize these features for Q2. I\'ll create a roadmap.',
        sender: {
          name: 'You',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
          isCurrentUser: true,
        },
        timestamp: new Date(Date.now() - 30 * 1000),
      },
    ];

    return <ChatWrapper {...args} messages={longMessages} />;
  },
  args: {
    skin: SKINS.SHADCN,
    placeholder: 'Type a message...',
    sendButtonText: 'Send',
  },
};

export const CustomStyling: Story = {
  render: (args) => (
    <div style={{ width: '500px', height: '650px' }}>
      <Chat
        {...args}
        className="shadow-2xl rounded-lg"
        messages={mockMessages}
        onSendMessage={(content) => console.log('Message sent:', content)}
      />
    </div>
  ),
  args: {
    skin: SKINS.SHADCN,
    placeholder: 'Write your thoughts...',
    sendButtonText: 'Submit',
  },
};