import Button from "@/components/common/Button";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex flex-col justify-center items-center text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-blue-200">StateCraft</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Mastering State Management with Redux & Context API
        </p>
        <p className="text-lg mb-12 text-blue-50 max-w-2xl mx-auto">
          Explore different approaches to state management in React applications.
          From basic useState to advanced Redux implementation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/counter-app">
            <Button buttonLabel="Try Counter App" buttonBackgroundColor="white" />
          </Link>
          <Link href="/about">
            <Button buttonLabel="Learn More" buttonBackgroundColor="blue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
