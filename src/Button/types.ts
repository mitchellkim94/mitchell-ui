import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    loadingText?: ReactNode
    isLink?: boolean
    appearance?:
        | 'primary'
        | 'primaryOutline'
        | 'secondary'
        | 'secondaryOutline'
        | 'tertiary'
        | 'outline'
    isDisabled?: boolean
    containsIcon?: boolean
    size: 'small' | 'medium' | 'large'
    /**
     * A component that wraps the button
     * Can be used to add custom styles or props to the button
     */
    ButtonWrapper?: ElementType
    isUnclickable?: boolean
}

export type StyledButtonProps = ButtonProps & {
    as?: React.ElementType
}
