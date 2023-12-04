import classNames from "classnames"
import styles from "./styles.module.css"

interface ButtonProps {
  title?: string
  type?: "button" | "submit" | "reset"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "secondary" | "red" | "yellow" | "green"
  className?: string
  icon?: React.ElementType
}

export const Button = ({
  title,
  type = "button",
  className,
  icon: Icon,
  size = "md",
  variant = "primary"
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={classNames(
          "flex items-center focus:outline-none rounded-md justify-center focus:ring-4",
          className,
          styles[variant],
          styles[size]
        )}
      >
        {Icon && (
          <span className="mr-2">
            <Icon />{" "}
          </span>
        )}
        <span>{title}</span>
      </button>
    </>
  )
}

export default Button
