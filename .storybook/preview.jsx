import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '../src/shared/global'
import { theme } from '../src/shared/theme'

/** @type { import('@storybook/react').Preview } */
const preview = {
    decorators: [
        (Story) => (
            <>
                <ThemeProvider theme={theme}>
                    <Global styles={GlobalStyle} />
                    <Story />
                </ThemeProvider>
            </>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
