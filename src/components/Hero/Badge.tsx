
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm ${className}`}>
      {children}
    </div>
  );
};
