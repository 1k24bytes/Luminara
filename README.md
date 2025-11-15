# Aurora UI AURORA UI: The Future of Your Application

**Aurora UI** is a modern, professional React component library built with TypeScript and Tailwind CSS. It follows the `shadcn/ui` philosophy, meaning you don't install it as a package. Instead, you copy the self-contained component source code directly into your project, giving you complete ownership and control.

This guide will walk you through setting up a new React project and integrating the Aurora UI components.

---

## 🚀 Getting Started

To run this component library, you need to set it up within a React application environment. We recommend using **Vite** for a fast and modern development experience.

### Step 1: Bootstrap a New React Project

First, create a new React + TypeScript project using Vite:

```bash
npm create vite@latest my-aurora-app -- --template react-ts
cd my-aurora-app
```

### Step 2: Install Dependencies

Next, install Tailwind CSS and its peer dependencies, along with the utility libraries required by Aurora UI.

```bash
npm install -D tailwindcss postcss autoprefixer
npm install clsx tailwind-merge
```

### Step 3: Configure Tailwind CSS

You need to create and configure a few files for Tailwind CSS to work correctly.

1.  **Generate Tailwind Config Files:**
    Run the following command to create `tailwind.config.js` and `postcss.config.js`:

    ```bash
    npx tailwindcss init -p
    ```

2.  **Configure `tailwind.config.js`:**
    Replace the content of `tailwind.config.js` with the following configuration. This tells Tailwind where to scan for class names.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path is correct
      ],
      theme: {
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
          },
        },
      },
      plugins: [],
    }
    ```

3.  **Configure `src/index.css`:**
    Replace the content of your main CSS file (usually `src/index.css`) with the following Tailwind directives and base CSS variables for the theme.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222.2 47.4% 11.2%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96.1%;
        --accent-foreground: 222.2 47.4% 11.2%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 222.2 84% 4.9%;
      }
    }
    ```

### Step 4: Copy Aurora UI Files

Copy the `components`, `lib`, `pages`, and `types` directories from the Aurora UI source into your new project's `src` directory. Your project structure should look something like this:

```
my-aurora-app/
├── src/
│   ├── components/      # <-- Copied
│   ├── lib/             # <-- Copied
│   ├── pages/           # <-- Copied
│   ├── types/           # <-- Copied
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tailwind.config.js
```

### Step 5: Render the Homepage

Finally, update your `src/App.tsx` file to import and render the `Homepage` component.

```tsx
import { Homepage } from './pages/Homepage';
import './index.css'; // Ensure you import the global CSS

function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
```

---

## 🏃‍♂️ Running the Development Server

You are now ready to run the application! Start the Vite development server with the following command:

```bash
npm run dev
```

Open your browser and navigate to the URL provided (usually `http://localhost:5173`) to see the Aurora UI homepage in action.
