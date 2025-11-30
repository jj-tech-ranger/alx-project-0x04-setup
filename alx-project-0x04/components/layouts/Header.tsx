import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-blue-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-4xl font-bold text-white tracking-tight hover:text-blue-200 transition">
          StateCraft
        </Link>
        <div className="flex gap-4">
          <Link href="/counter-app">
            <Button buttonLabel="Counter App" buttonBackgroundColor="white" />
          </Link>
          <Link href="/about">
            <Button buttonLabel="About" buttonBackgroundColor="blue" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
