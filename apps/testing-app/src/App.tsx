import Layout from './components/Layout.tsx';
import { Index as ShadcnButton } from '@orchid-design-system/neobrutalism/src/components/button/shadcn';
import { Button as NeoBrutalismButton } from '@orchid-design-system/neobrutalism/src/components/button/neobrutalism';
import { Alert } from '@orchid-design-system/neobrutalism/src';


function App() {
  return (
    <Layout>
      <section id="buttons">
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Shadcn Theme</h3>
            <div className="flex flex-wrap gap-3">
              <ShadcnButton>Default</ShadcnButton>
              <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              <ShadcnButton variant="destructive">Destructive</ShadcnButton>
              <ShadcnButton variant="outline">Outline</ShadcnButton>
              <ShadcnButton variant="ghost">Ghost</ShadcnButton>
              <ShadcnButton variant="link">Link</ShadcnButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Neobrutalism Theme</h3>
            <div className="flex flex-wrap gap-3">
              <NeoBrutalismButton>Default</NeoBrutalismButton>
              <NeoBrutalismButton variant="neutral">Neutral</NeoBrutalismButton>
              <NeoBrutalismButton variant="noShadow">No Shadow</NeoBrutalismButton>
              <NeoBrutalismButton variant="reverse">Reverse</NeoBrutalismButton>
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
              <Alert>
                <div>
                  <h4 className="font-medium">Default Alert</h4>
                  <p className="text-sm">This is a default alert message.</p>
                </div>
              </Alert>
              <Alert variant="destructive">
                <div>
                  <h4 className="font-medium">Error Alert</h4>
                  <p className="text-sm">This is an error alert message.</p>
                </div>
              </Alert>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default App;