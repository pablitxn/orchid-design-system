import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Build all CSS in one file to ensure all classes are included
try {
  execSync(
    `npx @tailwindcss/cli -i src/assets/styles/all.css -o dist/styles.css`,
    { 
      cwd: __dirname,
      stdio: 'inherit'
    }
  );
  console.log('Built styles.css with all Tailwind utilities');
  
  // For backward compatibility, also copy the original CSS files
  copyFileSync(
    join(__dirname, 'src/assets/styles/base.css'),
    join(__dirname, 'dist/base.css')
  );
  copyFileSync(
    join(__dirname, 'src/assets/styles/shadcn.css'),
    join(__dirname, 'dist/shadcn.css')
  );
  copyFileSync(
    join(__dirname, 'src/assets/styles/neobrutalism.css'),
    join(__dirname, 'dist/neobrutalism.css')
  );
  
  console.log('CSS files copied');
} catch (error) {
  console.error('Failed to build CSS:', error);
  process.exit(1);
}