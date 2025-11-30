interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor = "blue" }) => {
  const colorClasses = {
    red: "bg-red-600 hover:bg-red-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    white: "bg-white text-blue-900 hover:bg-gray-100",
  };

  const bgClass = colorClasses[buttonBackgroundColor as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <button
      className={`${bgClass} text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg transform hover:scale-105`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
