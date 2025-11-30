const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 flex flex-col justify-center items-center text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-center">
          About <span className="text-blue-300">StateCraft</span>
        </h1>
        <div className="space-y-6 text-lg">
          <p className="text-slate-200">
            StateCraft is a comprehensive learning project designed to demonstrate different approaches 
            to state management in React applications.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">What You'll Learn:</h2>
            <ul className="space-y-3 text-slate-200">
              <li>✓ Basic state management with useState Hook</li>
              <li>✓ Global state management with Context API</li>
              <li>✓ Advanced state management with Redux Toolkit</li>
              <li>✓ When to use each state management solution</li>
              <li>✓ Best practices for scalable state management</li>
            </ul>
          </div>
          <p className="text-slate-200">
            This project series builds an interactive counter application using three different 
            state management approaches, allowing you to compare and understand the trade-offs 
            of each solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
