import styled from '@emotion/styled'
import { InputHTMLAttributes, forwardRef } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

const StyledInputWrap = styled.div`
    label {
    }

    input {
        background-color: ${({ theme }) => theme.bgColor.input};
        color: ${({ theme }) => theme.fontColor.white};
    }
`

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <StyledInputWrap>
            {props.label && <label htmlFor=''>{props.label}</label>}
            <input type='text' ref={ref} />
        </StyledInputWrap>
    )
})
