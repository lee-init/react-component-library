import { ButtonHTMLAttributes } from "react"
import { Button as LibButton } from "react-bootstrap"
import "./Button.css"

export type ButtonVariant =
	| "primary"
	| "secondary"

export type ButtonProperties = Readonly<ButtonHTMLAttributes<HTMLButtonElement>> & {
	variant: ButtonVariant;
	text: string;
	onClick: () => void;
}

export const Button = ({ variant, text, onClick, ...props }: ButtonProperties) => {
	return (
		<LibButton
			{...props}
			onClick={onClick}
			variant={variant}
			className="button-default"
		>{text}
		</LibButton>
	)
}
