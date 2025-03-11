interface ButtonProps {
  buttonText?: string,
  type?: "button" | "reset" | "submit" | undefined,
  className?: string,
  onClick?: () => void
}

/* how many way component re-render
- state changes
- props changes
- parent render -> child render
- key change (force update)
*/

function Button({ buttonText = 'Default Button',  type="button", ...restProps }: ButtonProps) {
  return (
    <button
      // type={type}
      // className={className}
      // onClick={onClick}
      {...restProps}
    >
      {buttonText}
    </button>
  )
}

export default Button