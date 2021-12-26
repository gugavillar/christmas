import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    red: '#DA2535',
    pink: '#f7c789',
    white: '#f9f9f9',
    gray200: '#404040',
    gray: '#8d8d8d',
    backlight: '#161212'
  },
  fonts: ['Poppins', 'sans-serif']
}

const ProviderTheme: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export { ProviderTheme, theme }
