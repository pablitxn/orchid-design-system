import { useState } from 'react';
import { AlertCircle, Info } from 'lucide-react';
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
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Chat,
  Alert,
  AlertTitle,
  AlertDescription,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  ScrollArea,
  ScrollBar,
  Skeleton,
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card skin={currentSkin} className="p-6">
              <CardHeader skin={currentSkin}>
                <CardTitle skin={currentSkin}>Buttons & Controls</CardTitle>
                <CardDescription skin={currentSkin}>
                  Various button styles and interactive controls
                </CardDescription>
              </CardHeader>
              <CardContent skin={currentSkin} className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Button skin={currentSkin}>Default</Button>
                  <Button skin={currentSkin} variant="secondary">Secondary</Button>
                  <Button skin={currentSkin} variant="destructive">Destructive</Button>
                  <Button skin={currentSkin} variant="outline">Outline</Button>
                  <Button skin={currentSkin} variant="ghost">Ghost</Button>
                  <Button skin={currentSkin} variant="link">Link</Button>
                </div>

                <div className="flex items-center gap-4">
                  <Badge skin={currentSkin}>Default</Badge>
                  {/* @ts-ignore */}
                  <Badge skin={currentSkin} variant="secondary">Secondary</Badge>
                  {/* @ts-ignore */}
                  <Badge skin={currentSkin} variant="destructive">Destructive</Badge>
                  {/* @ts-ignore */}
                  <Badge skin={currentSkin} variant="outline">Outline</Badge>
                </div>

                <div className="space-y-2">
                  <Label skin={currentSkin}>Volume Control</Label>
                  <Slider skin={currentSkin} defaultValue={[50]} max={100} step={1} />
                </div>

                <div className="space-y-2">
                  <Label skin={currentSkin}>Loading Progress</Label>
                  <Progress value={66} skin={currentSkin} />
                </div>
              </CardContent>
            </Card>

            <Card skin={currentSkin} className="p-6">
              <CardHeader skin={currentSkin}>
                <CardTitle skin={currentSkin}>Form Inputs</CardTitle>
                <CardDescription skin={currentSkin}>
                  Text inputs and selection controls
                </CardDescription>
              </CardHeader>
              <CardContent skin={currentSkin} className="space-y-4">
                <div className="space-y-2">
                  <Label skin={currentSkin} htmlFor="email">Email</Label>
                  <Input skin={currentSkin} id="email" type="email" placeholder="email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label skin={currentSkin} htmlFor="message">Message</Label>
                  <Textarea skin={currentSkin} id="message" placeholder="Type your message here..." />
                </div>

                <div className="space-y-2">
                  <Label skin={currentSkin}>Select Framework</Label>
                  <Select skin={currentSkin}>
                    <SelectTrigger skin={currentSkin}>
                      <SelectValue skin={currentSkin} placeholder="Choose a framework" />
                    </SelectTrigger>
                    <SelectContent skin={currentSkin}>
                      <SelectItem skin={currentSkin} value="react">React</SelectItem>
                      <SelectItem skin={currentSkin} value="vue">Vue</SelectItem>
                      <SelectItem skin={currentSkin} value="angular">Angular</SelectItem>
                      <SelectItem skin={currentSkin} value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label skin={currentSkin}>Choose your plan</Label>
                  <RadioGroup defaultValue="pro" skin={currentSkin}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free" skin={currentSkin} />
                      <Label htmlFor="free">Free tier</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pro" id="pro" skin={currentSkin} />
                      <Label htmlFor="pro">Pro tier</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enterprise" id="enterprise" skin={currentSkin} />
                      <Label htmlFor="enterprise">Enterprise</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card skin={currentSkin} className="p-6">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin}>Feedback & Information</CardTitle>
              <CardDescription skin={currentSkin}>
                Alerts, tooltips, and user feedback components
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin} className="space-y-4">
              <Alert skin={currentSkin}>
                <Info className="h-4 w-4" />
                <div className="flex-1">
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can switch between themes using the toggle at the top of the page.
                  </AlertDescription>
                </div>
              </Alert>

              <Alert skin={currentSkin} variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <div className="flex-1">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again later.
                  </AlertDescription>
                </div>
              </Alert>

              <div className="flex gap-4">
                <Avatar skin={currentSkin}>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar skin={currentSkin}>
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar skin={currentSkin}>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex gap-4">
                <Tooltip skin={currentSkin}>
                  <TooltipTrigger asChild>
                    <Button skin={currentSkin} variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent skin={currentSkin}>
                    <p>This is a helpful tooltip!</p>
                  </TooltipContent>
                </Tooltip>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button skin={currentSkin} variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent skin={currentSkin}>
                    <DropdownMenuLabel skin={currentSkin}>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator skin={currentSkin} />
                    <DropdownMenuItem skin={currentSkin}>Profile</DropdownMenuItem>
                    <DropdownMenuItem skin={currentSkin}>Billing</DropdownMenuItem>
                    <DropdownMenuItem skin={currentSkin}>Team</DropdownMenuItem>
                    <DropdownMenuSeparator skin={currentSkin} />
                    <DropdownMenuItem skin={currentSkin}>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          <Card skin={currentSkin} className="p-6">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin}>Content Organization</CardTitle>
              <CardDescription skin={currentSkin}>
                Tabs, accordions, and content layouts
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin} className="space-y-6">
              <Tabs skin={currentSkin} defaultValue="overview" className="w-full">
                <TabsList skin={currentSkin}>
                  <TabsTrigger skin={currentSkin} value="overview">Overview</TabsTrigger>
                  <TabsTrigger skin={currentSkin} value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger skin={currentSkin} value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent skin={currentSkin} value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Here's an overview of your project performance and key metrics.
                  </p>
                </TabsContent>
                <TabsContent skin={currentSkin} value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Detailed analytics and insights about your application usage.
                  </p>
                </TabsContent>
                <TabsContent skin={currentSkin} value="reports" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Generate and download comprehensive reports.
                  </p>
                </TabsContent>
              </Tabs>

              <Accordion type="single" collapsible className="w-full" skin={currentSkin}>
                <AccordionItem value="item-1" skin={currentSkin}>
                  <AccordionTrigger skin={currentSkin}>Is it accessible?</AccordionTrigger>
                  <AccordionContent skin={currentSkin}>
                    Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard navigable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" skin={currentSkin}>
                  <AccordionTrigger skin={currentSkin}>Is it customizable?</AccordionTrigger>
                  <AccordionContent skin={currentSkin}>
                    Absolutely! You can customize colors, spacing, and behavior to match your brand.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" skin={currentSkin}>
                  <AccordionTrigger skin={currentSkin}>Can I use it in production?</AccordionTrigger>
                  <AccordionContent skin={currentSkin}>
                    Yes, all components are production-ready and thoroughly tested.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card skin={currentSkin} className="p-6">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin}>Data Display</CardTitle>
              <CardDescription skin={currentSkin}>
                Tables and structured data presentation
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin}>
              <div className="overflow-x-auto">
                <Table skin={currentSkin}>
                  <TableHeader skin={currentSkin}>
                    <TableRow skin={currentSkin}>
                      <TableHead skin={currentSkin}>Framework</TableHead>
                      <TableHead skin={currentSkin}>Status</TableHead>
                      <TableHead skin={currentSkin}>Popularity</TableHead>
                      <TableHead skin={currentSkin} className="text-right">Stars</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody skin={currentSkin}>
                    <TableRow skin={currentSkin}>
                      <TableCell skin={currentSkin} className="font-medium">React</TableCell>
                      <TableCell skin={currentSkin}>
                        {/*@ts-ignore*/}
                        <Badge skin={currentSkin} variant="outline">Stable</Badge>
                      </TableCell>
                      <TableCell skin={currentSkin}>Very High</TableCell>
                      <TableCell skin={currentSkin} className="text-right">220k</TableCell>
                    </TableRow>
                    <TableRow skin={currentSkin}>
                      <TableCell skin={currentSkin} className="font-medium">Vue</TableCell>
                      <TableCell skin={currentSkin}>
                        {/* @ts-ignore */}
                        <Badge skin={currentSkin} variant="outline">Stable</Badge>
                      </TableCell>
                      <TableCell skin={currentSkin}>High</TableCell>
                      <TableCell skin={currentSkin} className="text-right">206k</TableCell>
                    </TableRow>
                    <TableRow skin={currentSkin}>
                      <TableCell skin={currentSkin} className="font-medium">Angular</TableCell>
                      <TableCell skin={currentSkin}>
                        {/* @ts-ignore */}
                        <Badge skin={currentSkin} variant="outline">Stable</Badge>
                      </TableCell>
                      <TableCell skin={currentSkin}>High</TableCell>
                      <TableCell skin={currentSkin} className="text-right">93k</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card skin={currentSkin} className="p-6">
              <CardHeader skin={currentSkin}>
                <CardTitle skin={currentSkin}>Loading States</CardTitle>
                <CardDescription skin={currentSkin}>
                  Skeleton loaders for better UX
                </CardDescription>
              </CardHeader>
              <CardContent skin={currentSkin} className="space-y-4">
                <div className="space-y-2">
                  <Skeleton skin={currentSkin} className="h-4 w-full" />
                  <Skeleton skin={currentSkin} className="h-4 w-3/4" />
                  <Skeleton skin={currentSkin} className="h-4 w-1/2" />
                </div>
                <div className="flex items-center space-x-4">
                  <Skeleton skin={currentSkin} className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton skin={currentSkin} className="h-4 w-[200px]" />
                    <Skeleton skin={currentSkin} className="h-4 w-[150px]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card skin={currentSkin} className="p-6">
              <CardHeader skin={currentSkin}>
                <CardTitle skin={currentSkin}>Scrollable Content</CardTitle>
                <CardDescription skin={currentSkin}>
                  Custom scrollbars for overflow content
                </CardDescription>
              </CardHeader>
              <CardContent skin={currentSkin}>
                <div className="relative">
                  <ScrollArea skin={currentSkin} className="h-[150px] w-full rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium">Documentation</h4>
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="text-sm py-1">
                          Section {i + 1} - This is scrollable content that should overflow.
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card skin={currentSkin} className="p-6">
            <CardHeader skin={currentSkin}>
              <CardTitle skin={currentSkin}>Interactive Dialogs</CardTitle>
              <CardDescription skin={currentSkin}>
                Modal dialogs for important interactions
              </CardDescription>
            </CardHeader>
            <CardContent skin={currentSkin}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button skin={currentSkin}>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent skin={currentSkin}>
                  <DialogHeader skin={currentSkin}>
                    <DialogTitle skin={currentSkin}>Are you sure?</DialogTitle>
                    <DialogDescription skin={currentSkin}>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter skin={currentSkin}>
                    <DialogClose asChild>
                      <Button skin={currentSkin} variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button skin={currentSkin}>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

        </div>
      </div>
    </TooltipProvider>
  );
}