interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className={`h-px bg-gray-200 ${className || ''}`} />;
};

export default Divider;
