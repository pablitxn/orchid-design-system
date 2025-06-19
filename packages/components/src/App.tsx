import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Switch,
  Label,
  Alert,
  AlertDescription,
  AlertTitle,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../ui';
import { DataTable } from './components/data-table';
import '@orchid-design-system/skins/styles/shadcn.css';
import '@orchid-design-system/skins/styles/neobrutalism.css';

function App() {
  const [currentSkin, setCurrentSkin] = useState<'shadcn' | 'neobrutalism'>('shadcn');

  const toggleSkin = () => {
    setCurrentSkin(currentSkin === 'shadcn' ? 'neobrutalism' : 'shadcn');
  };

  const sampleData = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
      status: 'active',
      progress: 75,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Designer',
      status: 'active',
      progress: 90,
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Manager',
      status: 'inactive',
      progress: 45,
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <header className="text-center mb-20">
            <h1
              className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Orchid Design System
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A beautiful collection of accessible UI components with shadcn and neobrutalism themes
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Label htmlFor="skin-switch" className="text-slate-700 dark:text-slate-300">
                Current theme: {currentSkin}
              </Label>
              <Switch
                id="skin-switch"
                skin={currentSkin}
                checked={currentSkin === 'neobrutalism'}
                onCheckedChange={toggleSkin}
              />
              <Button skin={currentSkin} onClick={toggleSkin} size="sm">
                Switch to {currentSkin === 'shadcn' ? 'Neobrutalism' : 'Shadcn'}
              </Button>
            </div>
          </header>

          <section className="mb-24">
            <Alert skin={currentSkin} className="mb-8">
              <AlertTitle>Theme Switcher Active</AlertTitle>
              <AlertDescription>
                Toggle between shadcn and neobrutalism themes using the switch above. All components will update their
                styles accordingly.
              </AlertDescription>
            </Alert>

            <Card skin={currentSkin} className="mb-12">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your team members and their roles</CardDescription>
              </CardHeader>
              <CardContent>
                <Table skin={currentSkin}>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleData.map((person) => (
                      <TableRow key={person.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar skin={currentSkin}>
                              <AvatarImage src={`https://i.pravatar.cc/150?u=${person.email}`} />
                              <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span>{person.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell>
                          {/*@ts-ignore*/}
                          <Badge skin={currentSkin} variant={person.role === 'Manager' ? 'default' : 'secondary'}>
                            {person.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            skin={currentSkin}
                            // @ts-ignore
                            variant={person.status === 'active' ? 'success' : 'destructive'}
                          >
                            {person.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress skin={currentSkin} value={person.progress} className="w-20" />
                            <span className="text-sm text-slate-600">{person.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button skin={currentSkin} size="sm" variant="outline">
                                  Edit
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent skin={currentSkin}>
                                <p>Edit user details</p>
                              </TooltipContent>
                            </Tooltip>
                            <Select skin={currentSkin}>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="More" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="view">View</SelectItem>
                                <SelectItem value="delete">Delete</SelectItem>
                                <SelectItem value="archive">Archive</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-slate-600">Showing {sampleData.length} of {sampleData.length} results</p>
                <div className="flex gap-2">
                  <Button skin={currentSkin} variant="outline" size="sm">Previous</Button>
                  <Button skin={currentSkin} variant="outline" size="sm">Next</Button>
                </div>
              </CardFooter>
            </Card>

            <Accordion skin={currentSkin} type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>Additional Information</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>This table demonstrates the integration of multiple Orchid Design System components:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Table component for structured data</li>
                      <li>Avatar components for user images</li>
                      <li>Badge components for status indicators</li>
                      <li>Progress bars for visual metrics</li>
                      <li>Buttons and tooltips for actions</li>
                      <li>Select dropdowns for additional options</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Form Example</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" skin={currentSkin}>Email</Label>
                      <Input skin={currentSkin} id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="role" skin={currentSkin}>Role</Label>
                      <Select skin={currentSkin}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button skin={currentSkin} className="w-full">Add Team Member</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </section>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;