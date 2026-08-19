import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

function App() {
  return (
    <main className="min-h-screen bg-background-primary p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-text-primary">
            Tech Lead Demo
          </h1>

          <p className="mt-2 text-text-secondary">
            Component-driven frontend architecture
          </p>
        </header>

        <section className="space-y-6">
          <img src="" />
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-text-primary">Button</h2>

            <div className="flex gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-text-primary">Input</h2>

            <Input placeholder="Enter your name" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
