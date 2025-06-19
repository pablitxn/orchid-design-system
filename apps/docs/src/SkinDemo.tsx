import { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  Info, 
  Sun, 
  Moon, 
  Sparkles, 
  User, 
  ShoppingCart, 
  Heart, 
  Star, 
  MessageSquare,
  Zap,
  Package,
  CreditCard,
  Bell,
  Search,
  Menu,
  ArrowRight,
  Check,
  X,
  ChevronRight,
  Layers,
  Palette,
  Code2,
  Gauge,
  Shield,
  Accessibility
} from 'lucide-react';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [sliderValue, setSliderValue] = useState([65]);
  const [progressValue, setProgressValue] = useState(0);
  const [selectedFramework, setSelectedFramework] = useState('react');
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
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSkin(currentSkin === 'shadcn' ? 'neobrutalism' : 'shadcn');
      setIsTransitioning(false);
    }, 150);
  };

  // Simulate progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue(prev => prev >= 100 ? 0 : prev + 1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

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
      <div className={`min-h-screen transition-all duration-500 ${
        currentSkin === 'shadcn' 
          ? 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800'
          : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden px-8 pt-8 pb-4">
            <div className={`absolute inset-0 ${isTransitioning ? 'animate-pulse' : ''}`}>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl" />
            </div>
            
            <div className="relative z-10 text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-6">
                <Sparkles className={`w-8 h-8 ${currentSkin === 'neobrutalism' ? 'text-pink-600' : 'text-purple-600'}`} />
                <h1 className={`text-5xl font-bold tracking-tight ${
                  currentSkin === 'shadcn' 
                    ? 'bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300' 
                    : 'bg-gradient-to-r from-pink-600 to-purple-600'
                } bg-clip-text text-transparent`}>
                  Orchid Design System
                </h1>
                <Sparkles className={`w-8 h-8 ${currentSkin === 'neobrutalism' ? 'text-purple-600' : 'text-purple-600'}`} />
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the beauty of adaptive design with two distinct visual languages
              </p>
              
              {/* Enhanced Theme Switcher */}
              <div className="flex items-center justify-center gap-6 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <Sun className={`w-5 h-5 ${currentSkin === 'shadcn' ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                  <span className={`font-medium ${currentSkin === 'shadcn' ? 'text-foreground' : 'text-muted-foreground'}`}>
                    Minimal
                  </span>
                </div>
                <Switch
                  skin={currentSkin}
                  checked={currentSkin === 'neobrutalism'}
                  onCheckedChange={toggleSkin}
                  className="data-[state=checked]:bg-pink-600"
                />
                <div className="flex items-center gap-3">
                  <span className={`font-medium ${currentSkin === 'neobrutalism' ? 'text-foreground' : 'text-muted-foreground'}`}>
                    Playful
                  </span>
                  <Zap className={`w-5 h-5 ${currentSkin === 'neobrutalism' ? 'text-pink-500' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Showcase Grid */}
          <div className="px-8 py-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Component Showcase</h2>
              <p className="text-muted-foreground">See how each component adapts to the selected theme</p>
            </div>

            {/* Interactive Demo Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Chat Demo */}
              <Card skin={currentSkin} className="lg:col-span-2 overflow-hidden">
                <CardHeader skin={currentSkin} className="pb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <CardTitle skin={currentSkin}>Live Chat Interface</CardTitle>
                  </div>
                  <CardDescription skin={currentSkin}>
                    Real-time messaging with theme-aware styling
                  </CardDescription>
                </CardHeader>
                <CardContent skin={currentSkin} className="p-0">
                  <div className="h-[400px]">
                    <Chat
                      skin={currentSkin}
                      messages={messages}
                      onSendMessage={handleSendMessage}
                      placeholder={currentSkin === 'shadcn' ? 'Type a message...' : 'Type something fun! 🎨'}
                      sendButtonText="Send"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card skin={currentSkin} className="overflow-hidden">
                  <CardHeader skin={currentSkin} className="pb-4">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-5 h-5" />
                      <CardTitle skin={currentSkin}>Quick Stats</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent skin={currentSkin} className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Design Progress</span>
                        <span className="text-sm font-bold">{Math.round(progressValue)}%</span>
                      </div>
                      <Progress value={progressValue} skin={currentSkin} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">User Satisfaction</span>
                        <span className="text-sm font-bold">{sliderValue[0]}%</span>
                      </div>
                      <Slider 
                        skin={currentSkin} 
                        value={sliderValue} 
                        onValueChange={setSliderValue}
                        max={100} 
                        step={1} 
                        className="py-2"
                      />
                    </div>
                    <div className="pt-2 space-y-2">
                      <Button skin={currentSkin} className="w-full" size="sm">
                        <Package className="w-4 h-4 mr-2" />
                        Deploy Changes
                      </Button>
                      <Button skin={currentSkin} variant="outline" className="w-full" size="sm">
                        <Code2 className="w-4 h-4 mr-2" />
                        View Source
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Feature Highlights */}
                <Card skin={currentSkin}>
                  <CardContent skin={currentSkin} className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          currentSkin === 'shadcn' ? 'bg-green-100 dark:bg-green-900' : 'bg-green-200 border-2 border-black'
                        }`}>
                          <Accessibility className="w-4 h-4 text-green-700 dark:text-green-300" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Accessible</p>
                          <p className="text-xs text-muted-foreground">WCAG compliant</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          currentSkin === 'shadcn' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-blue-200 border-2 border-black'
                        }`}>
                          <Shield className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Type Safe</p>
                          <p className="text-xs text-muted-foreground">Full TypeScript</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          currentSkin === 'shadcn' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-purple-200 border-2 border-black'
                        }`}>
                          <Palette className="w-4 h-4 text-purple-700 dark:text-purple-300" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Themeable</p>
                          <p className="text-xs text-muted-foreground">Multiple skins</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Component Gallery */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* E-commerce Card Example */}
              <Card skin={currentSkin} className="overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${
                  currentSkin === 'shadcn' 
                    ? 'from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800' 
                    : 'from-pink-200 to-purple-200 border-b-4 border-black'
                } flex items-center justify-center`}>
                  <Package className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <CardContent skin={currentSkin} className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Premium Package</h3>
                      <p className="text-sm text-muted-foreground">Everything you need</p>
                    </div>
                    {/* @ts-ignore */}
                    <Badge skin={currentSkin} variant="secondary">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Unlimited projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Advanced analytics</span>
                    </div>
                  </div>
                  <Button skin={currentSkin} className="w-full">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Interactive Controls */}
              <Card skin={currentSkin}>
                <CardHeader skin={currentSkin}>
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    <CardTitle skin={currentSkin}>UI Controls</CardTitle>
                  </div>
                </CardHeader>
                <CardContent skin={currentSkin} className="space-y-4">
                  <div className="space-y-3">
                    <Label skin={currentSkin}>Button Variants</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button skin={currentSkin} size="sm">Primary</Button>
                      <Button skin={currentSkin} size="sm" variant="secondary">Secondary</Button>
                      <Button skin={currentSkin} size="sm" variant="outline">Outline</Button>
                      <Button skin={currentSkin} size="sm" variant="ghost">Ghost</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label skin={currentSkin}>Status Badges</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge skin={currentSkin}>New</Badge>
                      {/* @ts-ignore */}
                      <Badge skin={currentSkin} variant="secondary">Updated</Badge>
                      {/* @ts-ignore */}
                      <Badge skin={currentSkin} variant="destructive">Hot</Badge>
                      {/* @ts-ignore */}
                      <Badge skin={currentSkin} variant="outline">Beta</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label skin={currentSkin}>Notification Settings</Label>
                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4" />
                        <span className="text-sm">Push Notifications</span>
                      </div>
                      <Switch skin={currentSkin} defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Profile Card */}
              <Card skin={currentSkin}>
                <CardContent skin={currentSkin} className="pt-6">
                  <div className="text-center mb-4">
                    <Avatar skin={currentSkin} className="w-20 h-20 mx-auto mb-3">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Projects</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Team Size</span>
                      <span className="font-medium">8 members</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${
                            i < 4 ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'
                          }`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button skin={currentSkin} variant="outline" size="sm">
                      <User className="w-4 h-4 mr-1" />
                      Profile
                    </Button>
                    <Button skin={currentSkin} size="sm">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Form Example */}
            <Card skin={currentSkin} className="mb-8">
              <CardHeader skin={currentSkin}>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle skin={currentSkin} className="text-2xl">Contact Support</CardTitle>
                    <CardDescription skin={currentSkin}>
                      Experience our form components in action
                    </CardDescription>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    currentSkin === 'shadcn' 
                      ? 'bg-primary/10' 
                      : 'bg-yellow-200 border-2 border-black'
                  }`}>
                    <MessageSquare className="w-6 h-6" />
                  </div>
                </div>
              </CardHeader>
              <CardContent skin={currentSkin}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label skin={currentSkin}>First Name</Label>
                        <Input skin={currentSkin} placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <Label skin={currentSkin}>Last Name</Label>
                        <Input skin={currentSkin} placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label skin={currentSkin}>Email</Label>
                      <div className="relative">
                        <Input skin={currentSkin} type="email" placeholder="jane@example.com" className="pl-8" />
                        <User className="w-4 h-4 absolute left-2.5 top-3 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label skin={currentSkin}>Department</Label>
                      <Select skin={currentSkin} value={selectedFramework} onValueChange={setSelectedFramework}>
                        <SelectTrigger skin={currentSkin}>
                          <SelectValue skin={currentSkin} />
                        </SelectTrigger>
                        <SelectContent skin={currentSkin}>
                          <SelectItem skin={currentSkin} value="technical">Technical Support</SelectItem>
                          <SelectItem skin={currentSkin} value="billing">Billing</SelectItem>
                          <SelectItem skin={currentSkin} value="general">General Inquiry</SelectItem>
                          <SelectItem skin={currentSkin} value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label skin={currentSkin}>Priority Level</Label>
                      <RadioGroup defaultValue="normal" skin={currentSkin}>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="low" skin={currentSkin} />
                            <Label htmlFor="low" className="text-sm">Low</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="normal" skin={currentSkin} />
                            <Label htmlFor="normal" className="text-sm">Normal</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="high" skin={currentSkin} />
                            <Label htmlFor="high" className="text-sm">High</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label skin={currentSkin}>Message</Label>
                      <Textarea 
                        skin={currentSkin} 
                        placeholder="Describe your issue or question..." 
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch skin={currentSkin} id="updates" />
                        <Label htmlFor="updates" className="text-sm">Email me updates</Label>
                      </div>
                      <Button skin={currentSkin}>
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications & Feedback */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card skin={currentSkin}>
                <CardHeader skin={currentSkin}>
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    <CardTitle skin={currentSkin}>Notifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent skin={currentSkin} className="space-y-3">
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
        </div>

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
    </div>
    </TooltipProvider>
  );
}