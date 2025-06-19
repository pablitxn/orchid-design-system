import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Switch,
  Label,
  TooltipProvider,
  Chat,
} from '@orchid-design-system/ui';

export function SkinDemo() {
  const [currentSkin, setCurrentSkin] = useState<'shadcn' | 'neobrutalism'>('shadcn');
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Welcome to Orchid Design System!',
      sender: {
        name: 'Orchid Bot',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Orchid',
        isCurrentUser: false,
      },
      timestamp: new Date(Date.now() - 10 * 60 * 1000),
    },
    {
      id: 2,
      content: 'Try switching between themes using the toggle above!',
      sender: {
        name: 'Orchid Bot',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Orchid',
        isCurrentUser: false,
      },
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
    },
    {
      id: 3,
      content: 'This is amazing! I love how the components adapt to each theme.',
      sender: {
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
        isCurrentUser: true,
      },
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
    },
  ]);

  const toggleSkin = () => {
    setCurrentSkin(currentSkin === 'shadcn' ? 'neobrutalism' : 'shadcn');
  };

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
    <TooltipProvider>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-8">
        <div className="max-w-6xl  mx-auto space-y-8">
          <Card skin={currentSkin} className="p-4 text-center">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin} className="text-3xl font-bold">
                Orchid Design System - Skin Demo
              </CardTitle>
              <CardDescription skin={currentSkin}>
                Toggle between shadcn and neobrutalism themes
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin}>
              <div className="flex items-center justify-center gap-4">
                <Label skin={currentSkin} htmlFor="skin-switch" className="text-lg">
                  Current theme: <span className="font-bold">{currentSkin}</span>
                </Label>
                <Switch
                  id="skin-switch"
                  skin={currentSkin}
                  checked={currentSkin === 'neobrutalism'}
                  onCheckedChange={toggleSkin}
                />
                <Button skin={currentSkin} onClick={toggleSkin} variant="outline">
                  Switch to {currentSkin === 'shadcn' ? 'Neobrutalism' : 'Shadcn'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card skin={currentSkin} className="p-6">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin} className="text-2xl">
                Interactive Chat Component
              </CardTitle>
              <CardDescription skin={currentSkin}>
                A fully functional chat interface that adapts to the current theme
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin}>
              <div className="h-[500px] max-w-3xl mx-auto">
                <Chat
                  skin={currentSkin}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  placeholder={currentSkin === 'shadcn' ? 'Type a message...' : 'Type something bold...'}
                  sendButtonText="Send"
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </TooltipProvider>
  );
}