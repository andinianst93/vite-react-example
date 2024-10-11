import { useRouteError } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <main className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl mb-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <Button asChild variant={"default"}>
        <a href="/">Go back to homepage</a>
      </Button>
    </main>
  );
}
