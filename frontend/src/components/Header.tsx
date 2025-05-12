import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header bg-pink-600 text-white text-center py-4">
      <h1 className="font-bold text-xl">Checkpoint : frontend</h1>
      <Link to="/">Countries</Link>
    </header>
  );
}
