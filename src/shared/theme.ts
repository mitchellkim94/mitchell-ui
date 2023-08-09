import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        bgColor: {
            input: string
        }
        fontColor: {
            white: string
        }
        iconColor: {
            darkgrey: string
        }
    }
}

export const theme: Theme = {
    bgColor: {
        input: '#1C1C1E',
    },
    fontColor: {
        white: '#FFFFFF',
    },
    iconColor: {
        darkgrey: '#3D3C41',
    },
}
