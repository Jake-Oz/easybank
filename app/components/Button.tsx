type ButtonProps = Readonly<{
  children: React.ReactNode;
}>;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-gradient-to-r h-10 w-40 rounded-full from-primary-limeGreen to-primary-brightCyan text-sm text-neutral-white hover:opacity-70">
      {children}
    </button>
  );
};

export default Button;
