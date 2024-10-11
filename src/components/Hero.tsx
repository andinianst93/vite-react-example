import { Button } from "./ui/button";
export default function Hero() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our web deployment service.{" "}
            <a href="#" className="font-semibold text-blue-800">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
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
