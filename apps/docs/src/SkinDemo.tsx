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
} from '@orchid-design-system/ui';

export function SkinDemo() {
  const [currentSkin, setCurrentSkin] = useState<'shadcn' | 'neobrutalism'>('shadcn');

  const toggleSkin = () => {
    setCurrentSkin(currentSkin === 'shadcn' ? 'neobrutalism' : 'shadcn');
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

        </div>
      </div>
    </TooltipProvider>
  );
}