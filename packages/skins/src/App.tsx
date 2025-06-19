import { Alert, AlertTitle, AlertDescription } from './components/alert';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordion';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from './components/alert-dialog';
import { Avatar, AvatarImage, AvatarFallback } from './components/avatar';
import { Badge } from './components/badge';
import { SKINS } from './lib/constants';
import { CheckCircle2Icon } from 'lucide-react';


function App() {
  return (
    <>
      <section id="accordions" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Accordions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <Accordion type="multiple" skin={SKINS.SHADCN} className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <Accordion type="single" skin={SKINS.NEOBRUTALISM} className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Neobrutalism?</AccordionTrigger>
                <AccordionContent>
                  Neobrutalism is a modern design style characterized by bold colors, thick borders, and stark
                  contrasts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>


      <section id="alerts" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <div className="space-y-3 max-w-md">
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

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <div className="space-y-3 max-w-md">
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

      <section id="avatars" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Avatars</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <div className="flex gap-4">
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

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <div className="flex gap-4">
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


    </>
  );
}

export default App;