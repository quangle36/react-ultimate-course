import clsx from "clsx";

interface ButtonProps {
  buttonText?: string,
  type?: "button" | "reset" | "submit" | undefined,
  className?: string,
  onClick?: () => void,
  variant?: string;
}

/* how many way component re-render
- state changes
- props changes
- parent render -> child render
- key change (force update)

<Button className="tony">dad</Button>
*/

function Button({ buttonText = 'Default Button', type="button", variant = 'primary', className, ...restProps }: ButtonProps) {
  return (
    <button
      // type={type}
      // className={className}
      // onClick={onClick}
      className={clsx(
        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'btn-secondary',
        variant === 'tenrary' && 'btn-tenrary',
        className
      )}
      {...restProps}
    >
      {buttonText}
    </button>
  )
}

export default Button