import { Alert, AlertTitle, AlertDescription } from './components/alert';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordion';
import { Avatar, AvatarImage, AvatarFallback } from './components/avatar';

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
            <Accordion type="multiple" className="w-full max-w-md" skin={SKINS.SHADCN}>
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

          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <Accordion type="multiple" className="w-full max-w-xl" skin={SKINS.NEOBRUTALISM}>
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