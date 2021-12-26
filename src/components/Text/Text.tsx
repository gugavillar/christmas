import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

import { theme } from '../../styles/ProviderTheme'

type TextProps = HTMLAttributes<HTMLParagraphElement> & TypographyProps & ColorProps & SpaceProps & LayoutProps

const TextElement: React.FC<TextProps> = styled.p(typography, color, space, layout)

const Text: React.FC<TextProps> = ({ children, ...props }) => <TextElement {...props}>{children}</TextElement>

Text.defaultProps = {
  fontSize: 16,
  lineHeight: '24px',
  color: theme.colors.gray200
}

export { Text }
