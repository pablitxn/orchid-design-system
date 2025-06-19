import { Alert } from '@orchid-design-system/skins';
import { Button } from '@orchid-design-system/skins';


function App() {
  return (
    <>
      <section id="buttons">
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <div className="flex flex-wrap gap-3">
              <Button skin="shadcn">Default</Button>
              <Button skin="shadcn" variant="secondary">Secondary</Button>
              <Button skin="shadcn" variant="destructive">Destructive</Button>
              <Button skin="shadcn" variant="outline">Outline</Button>
              <Button skin="shadcn" variant="ghost">Ghost</Button>
              <Button skin="shadcn" variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <div className="flex flex-wrap gap-3">
              <Button skin="neobrutalism">Default</Button>
              <Button skin="neobrutalism" variant="neutral">Neutral</Button>
              <Button skin="neobrutalism" variant="noShadow">No Shadow</Button>
              <Button skin="neobrutalism" variant="reverse">Reverse</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="alerts">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <div className="space-y-3">
              <Alert skin="shadcn">
                <div>
                  <h4 className="font-medium">Default Alert</h4>
                  <p className="text-sm">This is a default alert message.</p>
                </div>
              </Alert>
              <Alert skin="shadcn" variant="destructive">
                <div>
                  <h4 className="font-medium">Error Alert</h4>
                  <p className="text-sm">This is an error alert message.</p>
                </div>
              </Alert>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <div className="space-y-3">
              <Alert skin="neobrutalism">
                <div>
                  <h4 className="font-medium">Default Alert</h4>
                  <p className="text-sm">This is a default alert message.</p>
                </div>
              </Alert>
              <Alert skin="neobrutalism" variant="destructive">
                <div>
                  <h4 className="font-medium">Error Alert</h4>
                  <p className="text-sm">This is an error alert message.</p>
                </div>
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;