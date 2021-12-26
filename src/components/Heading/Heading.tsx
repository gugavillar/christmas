import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

import { theme } from '../../styles/ProviderTheme'

type HeadingProps = TypographyProps &
  SpaceProps &
  ColorProps &
  HTMLAttributes<HTMLHeadElement> & {
    as?: string
  }

const HeadingElement: React.FC<HeadingProps> = styled.h1(typography, space, color)

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => (
  <HeadingElement {...props}>{children}</HeadingElement>
)

Heading.defaultProps = {
  as: 'h1',
  color: theme.colors.backlight
}

export { Heading }
