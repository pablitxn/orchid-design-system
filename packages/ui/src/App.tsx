import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from './components/ui/breadcrumb';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from './components/ui/dialog';
import { Slider } from './components/ui/slider';
import { Switch } from './components/ui/switch';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Textarea } from './components/ui/textarea';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './components/ui/tooltip';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { ScrollArea, ScrollBar } from './components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Skeleton } from './components/ui/skeleton';
import { Label } from './components/ui/label';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuRadioGroup } from './components/ui/dropdown-menu';
import { Input } from './components/ui/input';
import { Progress } from './components/ui/progress';

import { SKINS } from './lib/constants';
import { CheckCircle2Icon, ChevronRight, Home, Package, Settings } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Orchid Design System
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A beautiful collection of accessible UI components with shadcn and neobrutalism themes
          </p>
        </header>

      <section id="accordions" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Accordions</h2>
          <p className="text-slate-600 dark:text-slate-400">Expandable content sections with smooth animations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <Accordion type="multiple" className="w-full" skin={SKINS.SHADCN}>
              <AccordionItem value="item-1" skin={SKINS.SHADCN}>
                <AccordionTrigger skin={SKINS.SHADCN}>Is it accessible?</AccordionTrigger>
                <AccordionContent skin={SKINS.SHADCN}>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" skin={SKINS.SHADCN}>
                <AccordionTrigger skin={SKINS.SHADCN}>Is it styled?</AccordionTrigger>
                <AccordionContent skin={SKINS.SHADCN}>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" skin={SKINS.SHADCN}>
                <AccordionTrigger skin={SKINS.SHADCN}>Is it animated?</AccordionTrigger>
                <AccordionContent skin={SKINS.SHADCN}>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-yellow-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">💪</span>
              Neobrutalism Theme
            </h3>
            <Accordion type="multiple" className="w-full" skin={SKINS.NEOBRUTALISM}>
              <AccordionItem value="item-1" skin={SKINS.NEOBRUTALISM}>
                <AccordionTrigger skin={SKINS.NEOBRUTALISM}>What is Neobrutalism?</AccordionTrigger>
                <AccordionContent skin={SKINS.NEOBRUTALISM}>
                  Neobrutalism is a modern design style characterized by bold colors, thick borders, and stark
                  contrasts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" skin={SKINS.NEOBRUTALISM}>
                <AccordionTrigger skin={SKINS.NEOBRUTALISM}>Why use Neobrutalism?</AccordionTrigger>
                <AccordionContent skin={SKINS.NEOBRUTALISM}>
                  It creates bold, memorable interfaces that stand out from typical minimalist designs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" skin={SKINS.NEOBRUTALISM}>
                <AccordionTrigger skin={SKINS.NEOBRUTALISM}>How to implement it?</AccordionTrigger>
                <AccordionContent skin={SKINS.NEOBRUTALISM}>
                  Use bold colors, thick black borders, stark shadows, and brutalist typography.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>


      <section id="alerts" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Alerts</h2>
          <p className="text-slate-600 dark:text-slate-400">Informative messages and notifications</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="space-y-4">
              <Alert skin={SKINS.SHADCN}>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert skin={SKINS.SHADCN} variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="bg-pink-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              Neobrutalism Theme
            </h3>
            <div className="space-y-4">
              <Alert skin={SKINS.NEOBRUTALISM} className="w-100">
                <CheckCircle2Icon />
                <AlertTitle className="pt-1">Heads up!</AlertTitle>
                <AlertDescription className="w-100">
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert skin={SKINS.NEOBRUTALISM} variant="destructive">
                <CheckCircle2Icon />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="w-100">
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      <section id="avatars" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Avatars</h2>
          <p className="text-slate-600 dark:text-slate-400">User profile images with fallback support</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <Avatar skin={SKINS.SHADCN}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar skin={SKINS.SHADCN}>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar skin={SKINS.SHADCN}>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Neobrutalism Theme
            </h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <Avatar skin={SKINS.NEOBRUTALISM}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar skin={SKINS.NEOBRUTALISM}>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar skin={SKINS.NEOBRUTALISM}>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      <section id="breadcrumbs" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Breadcrumbs</h2>
          <p className="text-slate-600 dark:text-slate-400">Navigation paths for better UX</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <Breadcrumb skin={SKINS.SHADCN}>
              <BreadcrumbList skin={SKINS.SHADCN}>
                <BreadcrumbItem skin={SKINS.SHADCN}>
                  <BreadcrumbLink href="/" skin={SKINS.SHADCN}>
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator skin={SKINS.SHADCN}>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem skin={SKINS.SHADCN}>
                  <BreadcrumbLink href="/components" skin={SKINS.SHADCN}>Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator skin={SKINS.SHADCN}>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem skin={SKINS.SHADCN}>
                  <BreadcrumbPage skin={SKINS.SHADCN}>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="bg-green-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Neobrutalism Theme
            </h3>
            <Breadcrumb skin={SKINS.NEOBRUTALISM}>
              <BreadcrumbList skin={SKINS.NEOBRUTALISM}>
                <BreadcrumbItem skin={SKINS.NEOBRUTALISM}>
                  <BreadcrumbLink href="/" skin={SKINS.NEOBRUTALISM}>
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator skin={SKINS.NEOBRUTALISM}>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem skin={SKINS.NEOBRUTALISM}>
                  <BreadcrumbLink href="/components" skin={SKINS.NEOBRUTALISM}>Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator skin={SKINS.NEOBRUTALISM}>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem skin={SKINS.NEOBRUTALISM}>
                  <BreadcrumbPage skin={SKINS.NEOBRUTALISM}>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section id="buttons" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Buttons</h2>
          <p className="text-slate-600 dark:text-slate-400">Interactive elements with multiple variants</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button skin={SKINS.SHADCN}>Default</Button>
              <Button skin={SKINS.SHADCN} variant="secondary">Secondary</Button>
              <Button skin={SKINS.SHADCN} variant="destructive">Destructive</Button>
              <Button skin={SKINS.SHADCN} variant="outline">Outline</Button>
              <Button skin={SKINS.SHADCN} variant="ghost">Ghost</Button>
              <Button skin={SKINS.SHADCN} variant="link">Link</Button>
              <Button skin={SKINS.SHADCN} size="sm">Small</Button>
              <Button skin={SKINS.SHADCN} size="lg">Large</Button>
              <Button skin={SKINS.SHADCN} disabled>Disabled</Button>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Neobrutalism Theme
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button skin={SKINS.NEOBRUTALISM}>Default</Button>
              <Button skin={SKINS.NEOBRUTALISM} variant="secondary">Secondary</Button>
              <Button skin={SKINS.NEOBRUTALISM} variant="destructive">Destructive</Button>
              <Button skin={SKINS.NEOBRUTALISM} variant="outline">Outline</Button>
              <Button skin={SKINS.NEOBRUTALISM} variant="ghost">Ghost</Button>
              <Button skin={SKINS.NEOBRUTALISM} variant="link">Link</Button>
              <Button skin={SKINS.NEOBRUTALISM} size="sm">Small</Button>
              <Button skin={SKINS.NEOBRUTALISM} size="lg">Large</Button>
              <Button skin={SKINS.NEOBRUTALISM} disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cards" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Cards</h2>
          <p className="text-slate-600 dark:text-slate-400">Content containers with headers and footers</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card skin={SKINS.SHADCN}>
                <CardHeader skin={SKINS.SHADCN}>
                  <CardTitle skin={SKINS.SHADCN}>Card Title</CardTitle>
                  <CardDescription skin={SKINS.SHADCN}>Card description goes here.</CardDescription>
                </CardHeader>
                <CardContent skin={SKINS.SHADCN}>
                  <p>This is the card content. You can put any content here.</p>
                </CardContent>
                <CardFooter skin={SKINS.SHADCN}>
                  <Button skin={SKINS.SHADCN} variant="outline">Cancel</Button>
                  <Button skin={SKINS.SHADCN} className="ml-auto">Save</Button>
                </CardFooter>
              </Card>

              <Card skin={SKINS.SHADCN}>
                <CardHeader skin={SKINS.SHADCN}>
                  <Package className="h-8 w-8 mb-2" />
                  <CardTitle skin={SKINS.SHADCN}>Feature Card</CardTitle>
                  <CardDescription skin={SKINS.SHADCN}>Showcase your features with icons</CardDescription>
                </CardHeader>
                <CardContent skin={SKINS.SHADCN}>
                  <p>Add icons and rich content to make your cards more engaging.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-2xl">🎯</span>
              Neobrutalism Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card skin={SKINS.NEOBRUTALISM}>
                <CardHeader skin={SKINS.NEOBRUTALISM}>
                  <CardTitle skin={SKINS.NEOBRUTALISM}>Bold Card</CardTitle>
                  <CardDescription skin={SKINS.NEOBRUTALISM}>Neobrutalist design at its finest</CardDescription>
                </CardHeader>
                <CardContent skin={SKINS.NEOBRUTALISM}>
                  <p>This card features thick borders and bold shadows that make it pop!</p>
                </CardContent>
                <CardFooter skin={SKINS.NEOBRUTALISM}>
                  <Button skin={SKINS.NEOBRUTALISM} variant="outline">Cancel</Button>
                  <Button skin={SKINS.NEOBRUTALISM} className="ml-auto">Save</Button>
                </CardFooter>
              </Card>

              <Card skin={SKINS.NEOBRUTALISM}>
                <CardHeader skin={SKINS.NEOBRUTALISM}>
                  <Settings className="h-8 w-8 mb-2" />
                  <CardTitle skin={SKINS.NEOBRUTALISM}>Settings Card</CardTitle>
                  <CardDescription skin={SKINS.NEOBRUTALISM}>Configure your preferences</CardDescription>
                </CardHeader>
                <CardContent skin={SKINS.NEOBRUTALISM}>
                  <p>Brutalist aesthetics meet modern functionality.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="dialogs" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Dialogs</h2>
          <p className="text-slate-600 dark:text-slate-400">Modal windows for important interactions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <Dialog>
              <DialogTrigger asChild skin={SKINS.SHADCN}>
                <Button skin={SKINS.SHADCN}>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent skin={SKINS.SHADCN}>
                <DialogHeader skin={SKINS.SHADCN}>
                  <DialogTitle skin={SKINS.SHADCN}>Are you sure?</DialogTitle>
                  <DialogDescription skin={SKINS.SHADCN}>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter skin={SKINS.SHADCN}>
                  <DialogClose asChild skin={SKINS.SHADCN}>
                    <Button variant="outline" skin={SKINS.SHADCN}>Cancel</Button>
                  </DialogClose>
                  <Button skin={SKINS.SHADCN}>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-orange-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">💥</span>
              Neobrutalism Theme
            </h3>
            <Dialog>
              <DialogTrigger asChild skin={SKINS.NEOBRUTALISM}>
                <Button skin={SKINS.NEOBRUTALISM}>Open Bold Dialog</Button>
              </DialogTrigger>
              <DialogContent skin={SKINS.NEOBRUTALISM}>
                <DialogHeader skin={SKINS.NEOBRUTALISM}>
                  <DialogTitle skin={SKINS.NEOBRUTALISM}>Bold Confirmation</DialogTitle>
                  <DialogDescription skin={SKINS.NEOBRUTALISM}>
                    This neobrutalist dialog features thick borders and stark shadows.
                    Are you ready to embrace the bold aesthetic?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter skin={SKINS.NEOBRUTALISM}>
                  <DialogClose asChild skin={SKINS.NEOBRUTALISM}>
                    <Button variant="outline" skin={SKINS.NEOBRUTALISM}>No, go back</Button>
                  </DialogClose>
                  <Button skin={SKINS.NEOBRUTALISM}>Yes, let's go!</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="sliders" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Sliders</h2>
          <p className="text-slate-600 dark:text-slate-400">Range input controls for numeric values</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="w-full space-y-6">
              <Slider skin={SKINS.SHADCN} defaultValue={[50]} max={100} step={1} className="w-full" />
              <Slider skin={SKINS.SHADCN} defaultValue={[25, 75]} max={100} step={1} className="w-full" />
            </div>
          </div>

          <div className="bg-red-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎧</span>
              Neobrutalism Theme
            </h3>
            <div className="w-full space-y-6">
              <Slider skin={SKINS.NEOBRUTALISM} defaultValue={[50]} max={100} step={1} className="w-full" />
              <Slider skin={SKINS.NEOBRUTALISM} defaultValue={[25, 75]} max={100} step={1} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="switches" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Switches</h2>
          <p className="text-slate-600 dark:text-slate-400">Toggle controls for binary options</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="flex gap-4 justify-center">
              <Switch skin={SKINS.SHADCN} />
              <Switch skin={SKINS.SHADCN} defaultChecked />
              <Switch skin={SKINS.SHADCN} disabled />
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              Neobrutalism Theme
            </h3>
            <div className="flex gap-4 justify-center">
              <Switch skin={SKINS.NEOBRUTALISM} />
              <Switch skin={SKINS.NEOBRUTALISM} defaultChecked />
              <Switch skin={SKINS.NEOBRUTALISM} disabled />
            </div>
          </div>
        </div>
      </section>

      <section id="tables" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Tables</h2>
          <p className="text-slate-600 dark:text-slate-400">Organized data display with rows and columns</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="overflow-x-auto">
              <Table skin={SKINS.SHADCN}>
                <TableCaption skin={SKINS.SHADCN}>A list of your recent invoices.</TableCaption>
                <TableHeader skin={SKINS.SHADCN}>
                  <TableRow skin={SKINS.SHADCN}>
                    <TableHead skin={SKINS.SHADCN} className="w-[100px]">Invoice</TableHead>
                    <TableHead skin={SKINS.SHADCN}>Status</TableHead>
                    <TableHead skin={SKINS.SHADCN}>Method</TableHead>
                    <TableHead skin={SKINS.SHADCN} className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody skin={SKINS.SHADCN}>
                  <TableRow skin={SKINS.SHADCN}>
                    <TableCell skin={SKINS.SHADCN} className="font-medium">INV001</TableCell>
                    <TableCell skin={SKINS.SHADCN}>Paid</TableCell>
                    <TableCell skin={SKINS.SHADCN}>Credit Card</TableCell>
                    <TableCell skin={SKINS.SHADCN} className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow skin={SKINS.SHADCN}>
                    <TableCell skin={SKINS.SHADCN} className="font-medium">INV002</TableCell>
                    <TableCell skin={SKINS.SHADCN}>Pending</TableCell>
                    <TableCell skin={SKINS.SHADCN}>PayPal</TableCell>
                    <TableCell skin={SKINS.SHADCN} className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-cyan-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Neobrutalism Theme
            </h3>
            <div className="overflow-x-auto">
              <Table skin={SKINS.NEOBRUTALISM}>
                <TableCaption skin={SKINS.NEOBRUTALISM}>A bold table with neobrutalist styling.</TableCaption>
                <TableHeader skin={SKINS.NEOBRUTALISM}>
                  <TableRow skin={SKINS.NEOBRUTALISM}>
                    <TableHead skin={SKINS.NEOBRUTALISM} className="w-[100px]">Invoice</TableHead>
                    <TableHead skin={SKINS.NEOBRUTALISM}>Status</TableHead>
                    <TableHead skin={SKINS.NEOBRUTALISM}>Method</TableHead>
                    <TableHead skin={SKINS.NEOBRUTALISM} className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody skin={SKINS.NEOBRUTALISM}>
                  <TableRow skin={SKINS.NEOBRUTALISM}>
                    <TableCell skin={SKINS.NEOBRUTALISM} className="font-medium">INV001</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM}>Paid</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM}>Credit Card</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM} className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow skin={SKINS.NEOBRUTALISM}>
                    <TableCell skin={SKINS.NEOBRUTALISM} className="font-medium">INV002</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM}>Pending</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM}>PayPal</TableCell>
                    <TableCell skin={SKINS.NEOBRUTALISM} className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section id="tabs" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Tabs</h2>
          <p className="text-slate-600 dark:text-slate-400">Organize content into switchable panels</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <Tabs skin={SKINS.SHADCN} defaultValue="account" className="w-full">
              <TabsList skin={SKINS.SHADCN}>
                <TabsTrigger skin={SKINS.SHADCN} value="account">Account</TabsTrigger>
                <TabsTrigger skin={SKINS.SHADCN} value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent skin={SKINS.SHADCN} value="account" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here. Click save when you're done.
                </p>
              </TabsContent>
              <TabsContent skin={SKINS.SHADCN} value="password" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Change your password here. After saving, you'll be logged out.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-emerald-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">📑</span>
              Neobrutalism Theme
            </h3>
            <Tabs skin={SKINS.NEOBRUTALISM} defaultValue="account" className="w-full">
              <TabsList skin={SKINS.NEOBRUTALISM}>
                <TabsTrigger skin={SKINS.NEOBRUTALISM} value="account">Account</TabsTrigger>
                <TabsTrigger skin={SKINS.NEOBRUTALISM} value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent skin={SKINS.NEOBRUTALISM} value="account" className="mt-4">
                <p className="text-sm">
                  Bold account settings with neobrutalist flair. Make it pop!
                </p>
              </TabsContent>
              <TabsContent skin={SKINS.NEOBRUTALISM} value="password" className="mt-4">
                <p className="text-sm">
                  Secure password management with stark brutalist design.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="textareas" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Textareas</h2>
          <p className="text-slate-600 dark:text-slate-400">Multi-line text input fields</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="w-full space-y-4">
              <Textarea skin={SKINS.SHADCN} placeholder="Type your message here." />
              <Textarea skin={SKINS.SHADCN} placeholder="Disabled textarea" disabled />
            </div>
          </div>

          <div className="bg-violet-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">✍️</span>
              Neobrutalism Theme
            </h3>
            <div className="w-full space-y-4">
              <Textarea skin={SKINS.NEOBRUTALISM} placeholder="Bold text input with thick borders!" />
              <Textarea skin={SKINS.NEOBRUTALISM} placeholder="Disabled neobrutalist textarea" disabled />
            </div>
          </div>
        </div>
      </section>

      <section id="tooltips" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Tooltips</h2>
          <p className="text-slate-600 dark:text-slate-400">Contextual information on hover</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <TooltipProvider skin={SKINS.SHADCN}>
              <div className="flex gap-4 justify-center">
                <Tooltip skin={SKINS.SHADCN}>
                  <TooltipTrigger skin={SKINS.SHADCN} asChild>
                    <Button skin={SKINS.SHADCN} variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent skin={SKINS.SHADCN}>
                    <p>This is a helpful tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip skin={SKINS.SHADCN}>
                  <TooltipTrigger skin={SKINS.SHADCN} asChild>
                    <Button skin={SKINS.SHADCN}>Another tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent skin={SKINS.SHADCN}>
                    <p>More helpful information here</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          <div className="bg-amber-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Neobrutalism Theme
            </h3>
            <TooltipProvider skin={SKINS.NEOBRUTALISM}>
              <div className="flex gap-4 justify-center">
                <Tooltip skin={SKINS.NEOBRUTALISM}>
                  <TooltipTrigger skin={SKINS.NEOBRUTALISM} asChild>
                    <Button skin={SKINS.NEOBRUTALISM} variant="outline">Bold hover</Button>
                  </TooltipTrigger>
                  <TooltipContent skin={SKINS.NEOBRUTALISM}>
                    <p>Bold tooltip with thick borders!</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip skin={SKINS.NEOBRUTALISM}>
                  <TooltipTrigger skin={SKINS.NEOBRUTALISM} asChild>
                    <Button skin={SKINS.NEOBRUTALISM}>Brutalist tip</Button>
                  </TooltipTrigger>
                  <TooltipContent skin={SKINS.NEOBRUTALISM}>
                    <p>Stark shadows and bold design</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      <section id="radio-groups" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Radio Groups</h2>
          <p className="text-slate-600 dark:text-slate-400">Single selection from multiple options</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <RadioGroup defaultValue="option-1" skin={SKINS.SHADCN}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="option-1" skin={SKINS.SHADCN} />
                <Label htmlFor="option-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="option-2" skin={SKINS.SHADCN} />
                <Label htmlFor="option-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="option-3" skin={SKINS.SHADCN} />
                <Label htmlFor="option-3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-lime-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Neobrutalism Theme
            </h3>
            <RadioGroup defaultValue="option-1" skin={SKINS.NEOBRUTALISM}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="neo-option-1" skin={SKINS.NEOBRUTALISM} />
                <Label htmlFor="neo-option-1">Bold Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="neo-option-2" skin={SKINS.NEOBRUTALISM} />
                <Label htmlFor="neo-option-2">Bold Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="neo-option-3" skin={SKINS.NEOBRUTALISM} />
                <Label htmlFor="neo-option-3">Bold Option 3</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <section id="scroll-areas" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Scroll Areas</h2>
          <p className="text-slate-600 dark:text-slate-400">Custom scrollbars for overflow content</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <ScrollArea className="h-72 w-full rounded-md border" skin={SKINS.SHADCN}>
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm py-2">
                    Tag {i + 1} - Scroll to see more content
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" skin={SKINS.SHADCN} />
            </ScrollArea>
          </div>

          <div className="bg-rose-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">📜</span>
              Neobrutalism Theme
            </h3>
            <ScrollArea className="h-72 w-full rounded-md" skin={SKINS.NEOBRUTALISM}>
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Bold Content</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm py-2 font-bold">
                    Bold Item {i + 1} - Neobrutalist scroll experience
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" skin={SKINS.NEOBRUTALISM} />
            </ScrollArea>
          </div>
        </div>
      </section>

      <section id="selects" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Select Components</h2>
          <p className="text-slate-600 dark:text-slate-400">Dropdown selection interfaces</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <Select skin={SKINS.SHADCN}>
              <SelectTrigger className="w-full" skin={SKINS.SHADCN}>
                <SelectValue placeholder="Select a fruit" skin={SKINS.SHADCN} />
              </SelectTrigger>
              <SelectContent skin={SKINS.SHADCN}>
                <SelectItem value="apple" skin={SKINS.SHADCN}>Apple</SelectItem>
                <SelectItem value="banana" skin={SKINS.SHADCN}>Banana</SelectItem>
                <SelectItem value="blueberry" skin={SKINS.SHADCN}>Blueberry</SelectItem>
                <SelectItem value="grapes" skin={SKINS.SHADCN}>Grapes</SelectItem>
                <SelectItem value="pineapple" skin={SKINS.SHADCN}>Pineapple</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-teal-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Neobrutalism Theme
            </h3>
            <Select skin={SKINS.NEOBRUTALISM}>
              <SelectTrigger className="w-full" skin={SKINS.NEOBRUTALISM}>
                <SelectValue placeholder="Choose your style" skin={SKINS.NEOBRUTALISM} />
              </SelectTrigger>
              <SelectContent skin={SKINS.NEOBRUTALISM}>
                <SelectItem value="bold" skin={SKINS.NEOBRUTALISM}>Bold</SelectItem>
                <SelectItem value="brutal" skin={SKINS.NEOBRUTALISM}>Brutal</SelectItem>
                <SelectItem value="stark" skin={SKINS.NEOBRUTALISM}>Stark</SelectItem>
                <SelectItem value="striking" skin={SKINS.NEOBRUTALISM}>Striking</SelectItem>
                <SelectItem value="powerful" skin={SKINS.NEOBRUTALISM}>Powerful</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section id="skeletons" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Skeleton Components</h2>
          <p className="text-slate-600 dark:text-slate-400">Loading placeholders for content</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" skin={SKINS.SHADCN} />
              <Skeleton className="h-4 w-3/4" skin={SKINS.SHADCN} />
              <Skeleton className="h-4 w-1/2" skin={SKINS.SHADCN} />
              <div className="flex items-center space-x-4 mt-6">
                <Skeleton className="h-12 w-12 rounded-full" skin={SKINS.SHADCN} />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" skin={SKINS.SHADCN} />
                  <Skeleton className="h-4 w-[200px]" skin={SKINS.SHADCN} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Neobrutalism Theme
            </h3>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" skin={SKINS.NEOBRUTALISM} />
              <Skeleton className="h-4 w-3/4" skin={SKINS.NEOBRUTALISM} />
              <Skeleton className="h-4 w-1/2" skin={SKINS.NEOBRUTALISM} />
              <div className="flex items-center space-x-4 mt-6">
                <Skeleton className="h-12 w-12 rounded-full" skin={SKINS.NEOBRUTALISM} />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" skin={SKINS.NEOBRUTALISM} />
                  <Skeleton className="h-4 w-[200px]" skin={SKINS.NEOBRUTALISM} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dropdown-menus" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Dropdown Menus</h2>
          <p className="text-slate-600 dark:text-slate-400">Contextual menus for actions and navigation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="flex justify-center">
              <DropdownMenu skin={SKINS.SHADCN}>
                <DropdownMenuTrigger asChild skin={SKINS.SHADCN}>
                  <Button variant="outline" skin={SKINS.SHADCN}>Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent skin={SKINS.SHADCN}>
                  <DropdownMenuLabel skin={SKINS.SHADCN}>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator skin={SKINS.SHADCN} />
                  <DropdownMenuItem skin={SKINS.SHADCN}>Profile</DropdownMenuItem>
                  <DropdownMenuItem skin={SKINS.SHADCN}>Billing</DropdownMenuItem>
                  <DropdownMenuItem skin={SKINS.SHADCN}>Team</DropdownMenuItem>
                  <DropdownMenuSeparator skin={SKINS.SHADCN} />
                  <DropdownMenuGroup skin={SKINS.SHADCN}>
                    <DropdownMenuItem skin={SKINS.SHADCN}>Settings</DropdownMenuItem>
                    <DropdownMenuItem skin={SKINS.SHADCN}>Support</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator skin={SKINS.SHADCN} />
                  <DropdownMenuItem skin={SKINS.SHADCN}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="bg-fuchsia-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Neobrutalism Theme
            </h3>
            <div className="flex justify-center">
              <DropdownMenu skin={SKINS.NEOBRUTALISM}>
                <DropdownMenuTrigger asChild skin={SKINS.NEOBRUTALISM}>
                  <Button variant="outline" skin={SKINS.NEOBRUTALISM}>Bold Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent skin={SKINS.NEOBRUTALISM}>
                  <DropdownMenuLabel skin={SKINS.NEOBRUTALISM}>Bold Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator skin={SKINS.NEOBRUTALISM} />
                  <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Stark Profile</DropdownMenuItem>
                  <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Brutal Billing</DropdownMenuItem>
                  <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Bold Team</DropdownMenuItem>
                  <DropdownMenuSeparator skin={SKINS.NEOBRUTALISM} />
                  <DropdownMenuGroup skin={SKINS.NEOBRUTALISM}>
                    <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Striking Settings</DropdownMenuItem>
                    <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Powerful Support</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator skin={SKINS.NEOBRUTALISM} />
                  <DropdownMenuItem skin={SKINS.NEOBRUTALISM}>Exit Boldly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      <section id="inputs" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Inputs</h2>
          <p className="text-slate-600 dark:text-slate-400">Form input fields for user data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" skin={SKINS.SHADCN}>Email</Label>
                <Input type="email" id="email" placeholder="email@example.com" skin={SKINS.SHADCN} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" skin={SKINS.SHADCN}>Password</Label>
                <Input type="password" id="password" placeholder="Enter your password" skin={SKINS.SHADCN} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled" skin={SKINS.SHADCN}>Disabled Input</Label>
                <Input id="disabled" placeholder="Disabled input" disabled skin={SKINS.SHADCN} />
              </div>
            </div>
          </div>

          <div className="bg-stone-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">💫</span>
              Neobrutalism Theme
            </h3>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="neo-email" skin={SKINS.NEOBRUTALISM}>Bold Email</Label>
                <Input type="email" id="neo-email" placeholder="bold@example.com" skin={SKINS.NEOBRUTALISM} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="neo-password" skin={SKINS.NEOBRUTALISM}>Strong Password</Label>
                <Input type="password" id="neo-password" placeholder="Enter bold password" skin={SKINS.NEOBRUTALISM} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="neo-disabled" skin={SKINS.NEOBRUTALISM}>Disabled Bold Input</Label>
                <Input id="neo-disabled" placeholder="Disabled neobrutalist input" disabled skin={SKINS.NEOBRUTALISM} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="progress" className="mb-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Progress Bars</h2>
          <p className="text-slate-600 dark:text-slate-400">Visual indicators of completion status</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Shadcn Theme
            </h3>
            <div className="w-full space-y-6">
              <div>
                <p className="text-sm text-slate-600 mb-2">0%</p>
                <Progress value={0} skin={SKINS.SHADCN} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">25%</p>
                <Progress value={25} skin={SKINS.SHADCN} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">50%</p>
                <Progress value={50} skin={SKINS.SHADCN} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">75%</p>
                <Progress value={75} skin={SKINS.SHADCN} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">100%</p>
                <Progress value={100} skin={SKINS.SHADCN} />
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-slate-950 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">📈</span>
              Neobrutalism Theme
            </h3>
            <div className="w-full space-y-6">
              <div>
                <p className="text-sm font-bold mb-2">0%</p>
                <Progress value={0} skin={SKINS.NEOBRUTALISM} />
              </div>
              <div>
                <p className="text-sm font-bold mb-2">25%</p>
                <Progress value={25} skin={SKINS.NEOBRUTALISM} />
              </div>
              <div>
                <p className="text-sm font-bold mb-2">50%</p>
                <Progress value={50} skin={SKINS.NEOBRUTALISM} />
              </div>
              <div>
                <p className="text-sm font-bold mb-2">75%</p>
                <Progress value={75} skin={SKINS.NEOBRUTALISM} />
              </div>
              <div>
                <p className="text-sm font-bold mb-2">100%</p>
                <Progress value={100} skin={SKINS.NEOBRUTALISM} />
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}

export default App;