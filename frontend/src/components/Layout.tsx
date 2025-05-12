import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function PageLayout() {
  return (
    <body className="bg-gray-300">
      <Header />
      <main className="flex flex-col justify-center mx-12 md:mx-72">
        <Outlet />
      </main>
    </body>
  );
}
