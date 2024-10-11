import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
