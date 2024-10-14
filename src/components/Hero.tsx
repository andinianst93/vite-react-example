import { Button } from "./ui/button";
export default function Hero() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Platform for modern web projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let's build your next website together. Morphius.cloud provide a
            simple and easy-to-use web deployment service. Get started today!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <a href="https://morphius.cloud">Get Started</a>
            </Button>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
