type ButtonProps = {
    label?: string;
    onClick: () => void;
    customClassName?: string;
    secondary?: boolean;
    children?: React.ReactNode;
}

const Button = ({ label, onClick, customClassName, secondary, children }: ButtonProps) => {
  return (
    <button
        onClick={onClick}
        className={`
            bg-rose-200
            text-rose-500
            hover:bg-rose-500
            hover:text-white
            font-bold
            py-2
            px-4
            rounded
            transition
            duration-500
            ease-in-out
            ${customClassName}
            ${secondary ? 'bg-white text-rose-500 border-r-[1px] border-rose-500 hover:bg-rose-500' : ''}
        `}
    >
        {label}
        {children}
    </button>
  )
}
export default Button