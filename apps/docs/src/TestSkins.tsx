import { Button } from '@orchid-design-system/ui';

export function TestSkins() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Shadcn Skin</h2>
        <div className="space-x-4">
          <Button skin="shadcn" variant="default">Default Button</Button>
          <Button skin="shadcn" variant="outline">Outline Button</Button>
          <Button skin="shadcn" variant="secondary">Secondary Button</Button>
          <Button skin="shadcn" variant="destructive">Destructive Button</Button>
          <Button skin="shadcn" variant="ghost">Ghost Button</Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Neobrutalism Skin</h2>
        <div className="space-x-4">
          <Button skin="neobrutalism" variant="default">Default Button</Button>
          <Button skin="neobrutalism" variant="outline">Outline Button</Button>
          <Button skin="neobrutalism" variant="secondary">Secondary Button</Button>
          <Button skin="neobrutalism" variant="destructive">Destructive Button</Button>
          <Button skin="neobrutalism" variant="ghost">Ghost Button</Button>
        </div>
      </div>
    </div>
  );
}