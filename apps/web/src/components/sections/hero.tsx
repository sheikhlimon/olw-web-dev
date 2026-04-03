import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="flex flex-col items-center text-center max-w-2xl gap-4">
        <h1 className="text-4xl font-bold">
          Airbnb Assistants For
        </h1>
        <h2 className="text-3xl">
          Property Management
        </h2>
        <p className="text-muted-foreground">
          Description text here...
        </p>
        <Button href="#contact" className="mt-4">
          Schedule A Meeting →
        </Button>
      </div>
    </section>
  );
}
